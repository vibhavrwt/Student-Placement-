# Smart Placement & Internship Recommendation System — Dashboard

A polished Flask + SQLite demo for a DSA-II PBL project. It includes five sample student profiles, a skill-frequency chart, a student-to-skill network diagram, and simple graph representations (adjacency list and matrix).

## Run on macOS
1. Extract this ZIP and open `Student_Profile_Dashboard_Pro` in VS Code.
2. Open **Terminal → New Terminal**.
3. Run these commands one at a time:

```bash
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python3 app.py
```

4. Open http://127.0.0.1:5000

## Included
- Sample profiles: Vibhav Rawat, Prachi Raghav, Ridhima Sinha, Sumit Kumar, Abhas Rawat
- Add-profile form with SQLite persistence
- Skill-frequency chart
- Student/skill relationship graph
- Example adjacency list and adjacency matrix
- DFS/BFS traversal demonstration buttons

## Notes
- The sample emails and profile data are illustrative demo data, not real contact information.
- The graph illustrates student-to-skill relationships. The chart shows skill frequency in the sample profiles.
- This is a prototype; it does not yet use a trained AI model or provide verified live job listings.
- To restore the original five demo profiles, use **Restore demo data**.
