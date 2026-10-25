import csv
import json
import os

def generate_samples():
    root_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
    data_dir = os.path.join(root_dir, 'server', 'data')
    demo_4000_path = os.path.join(data_dir, 'demo_4000.csv')

    with open(demo_4000_path, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        all_rows_4000 = list(reader)

    print(f"Read {len(all_rows_4000)} rows from demo_4000.csv")

    # 1. Root: sample_enrollments_4000.csv
    root_csv_4000 = os.path.join(root_dir, 'sample_enrollments_4000.csv')
    with open(root_csv_4000, 'w', encoding='utf-8', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=['student_id', 'course_code', 'course_name'])
        writer.writeheader()
        writer.writerows(all_rows_4000)
    print(f"Created: {root_csv_4000}")

    # 2. Root: sample_enrollments_4000.json
    root_json_4000 = os.path.join(root_dir, 'sample_enrollments_4000.json')
    json_4000_payload = {
        "metadata": {
            "title": "Smart Exam Slot Management - Campus Scale Dataset",
            "total_students": 4000,
            "total_courses": len({r['course_code'] for r in all_rows_4000}),
            "total_enrollments": len(all_rows_4000),
            "branches": ["CSE", "IT", "AIDS", "ECE", "EEE", "MECH", "CIVIL", "CHEM"],
            "building_blocks": ["CB (5 Floors)", "AB1 (4 Floors)", "AB2 (4 Floors)"],
            "classroom_capacity": 70
        },
        "enrollments": all_rows_4000
    }
    with open(root_json_4000, 'w', encoding='utf-8') as f:
        json.dump(json_4000_payload, f, indent=2)
    print(f"Created: {root_json_4000}")

    # 3. Concise starter sample: sample_enrollments.csv (140 students across 12 subjects)
    # 140 students = exactly 2 classrooms of 70 students each!
    target_students = []
    # Take 70 CSE students and 70 ECE students
    for r in all_rows_4000:
        sid = r['student_id']
        if (sid.startswith('CSE00') and int(sid[3:]) <= 70) or (sid.startswith('ECE00') and int(sid[3:]) <= 70):
            target_students.append(r)

    root_csv_starter = os.path.join(root_dir, 'sample_enrollments.csv')
    with open(root_csv_starter, 'w', encoding='utf-8', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=['student_id', 'course_code', 'course_name'])
        writer.writeheader()
        writer.writerows(target_students)
    print(f"Created: {root_csv_starter} ({len(target_students)} records, 140 students = 2 classrooms of 70)")

    # 4. Concise starter sample: sample_enrollments.json
    root_json_starter = os.path.join(root_dir, 'sample_enrollments.json')
    json_starter_payload = {
        "metadata": {
            "title": "Smart Exam Slot Management - Starter Sample Dataset",
            "total_students": len({r['student_id'] for r in target_students}),
            "total_courses": len({r['course_code'] for r in target_students}),
            "total_enrollments": len(target_students),
            "classroom_capacity": 70
        },
        "enrollments": target_students
    }
    with open(root_json_starter, 'w', encoding='utf-8') as f:
        json.dump(json_starter_payload, f, indent=2)
    print(f"Created: {root_json_starter}")

    # Also save copies into server/data so the gateway can serve them for 1-click download in UI
    server_csv = os.path.join(data_dir, 'sample_enrollments.csv')
    server_json = os.path.join(data_dir, 'sample_enrollments.json')
    with open(server_csv, 'w', encoding='utf-8', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=['student_id', 'course_code', 'course_name'])
        writer.writeheader()
        writer.writerows(target_students)
    with open(server_json, 'w', encoding='utf-8') as f:
        json.dump(json_starter_payload, f, indent=2)

if __name__ == '__main__':
    generate_samples()
