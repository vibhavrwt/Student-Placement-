from flask import Flask, render_template, request, redirect, url_for, flash
import sqlite3
from pathlib import Path

app = Flask(__name__)
app.secret_key = "change-this-for-production"
DB_PATH = Path(__file__).with_name("students.db")

SAMPLE_STUDENTS = [
    ("Vibhav Rawat", "vibhav@example.com", "B.Tech CSE - Cybersecurity", "Python, SQL, Cybersecurity", "Cybersecurity Analyst", "Internship", "Noida"),
    ("Prachi Raghav", "prachi@example.com", "B.Tech CSE", "Python, HTML, CSS, Communication", "Web Developer", "Either", "Noida"),
    ("Ridhima Sinha", "ridhima@example.com", "B.Tech CSE", "Java, DSA, SQL", "Software Developer", "Placement", "Delhi NCR"),
    ("Sumit Kumar", "sumit@example.com", "B.Tech CSE", "Python, Data Analysis, Excel", "Data Analyst", "Internship", "Remote"),
    ("Abhas Rawat", "abhas@example.com", "B.Tech CSE", "JavaScript, HTML, CSS, UI Design", "Frontend Developer", "Either", "Delhi NCR"),
]

def get_db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    with get_db() as conn:
        conn.execute("""
            CREATE TABLE IF NOT EXISTS students (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                email TEXT NOT NULL,
                course TEXT NOT NULL,
                skills TEXT NOT NULL,
                role TEXT NOT NULL,
                opportunity TEXT NOT NULL,
                location TEXT NOT NULL
            )
        """)
        count = conn.execute("SELECT COUNT(*) FROM students").fetchone()[0]
        if count == 0:
            conn.executemany("""
                INSERT INTO students (name, email, course, skills, role, opportunity, location)
                VALUES (?, ?, ?, ?, ?, ?, ?)
            """, SAMPLE_STUDENTS)

@app.route("/")
def index():
    init_db()
    with get_db() as conn:
        students = conn.execute("SELECT * FROM students ORDER BY id").fetchall()
    skills_count = {}
    for student in students:
        for skill in [s.strip() for s in student["skills"].split(",") if s.strip()]:
            skills_count[skill] = skills_count.get(skill, 0) + 1
    top_skills = sorted(skills_count.items(), key=lambda x: (-x[1], x[0]))[:6]
    max_count = max([count for _, count in top_skills], default=1)
    return render_template("index.html", students=students, top_skills=top_skills, max_count=max_count)

@app.route("/add", methods=["POST"])
def add_student():
    values = [
        request.form.get("name", "").strip(),
        request.form.get("email", "").strip(),
        request.form.get("course", "").strip(),
        request.form.get("skills", "").strip(),
        request.form.get("role", "").strip(),
        request.form.get("opportunity", "").strip(),
        request.form.get("location", "").strip(),
    ]
    if not all(values):
        flash("Please complete every field before saving.", "error")
        return redirect(url_for("index"))
    with get_db() as conn:
        conn.execute("""
            INSERT INTO students (name, email, course, skills, role, opportunity, location)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        """, values)
    flash(f"Profile saved for {values[0]}.", "success")
    return redirect(url_for("index"))

@app.route("/reset-demo", methods=["POST"])
def reset_demo():
    with get_db() as conn:
        conn.execute("DELETE FROM students")
        conn.executemany("""
            INSERT INTO students (name, email, course, skills, role, opportunity, location)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        """, SAMPLE_STUDENTS)
    flash("Demo profiles restored.", "success")
    return redirect(url_for("index"))

if __name__ == "__main__":
    init_db()
    app.run(debug=True)
