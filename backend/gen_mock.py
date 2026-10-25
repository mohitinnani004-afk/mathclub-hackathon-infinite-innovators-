import sys
import json
from main import parse_csv_content, build_conflict_graph, welsh_powell_coloring, build_output_schema, DEFAULT_ROOMS

def main():
    csv_path = '../server/data/demo_4000.csv'
    with open(csv_path, 'r', encoding='utf-8') as f:
        records = parse_csv_content(f.read())

    print(f"Loaded {len(records)} enrollment records.")
    G = build_conflict_graph(records)
    print(f"Conflict Graph: {G.number_of_nodes()} courses, {G.number_of_edges()} clash edges.")

    coloring = welsh_powell_coloring(G)
    chromatic_num = max(coloring.values())
    print(f"Welsh-Powell Chromatic Number: {chromatic_num} slots required.")

    result = build_output_schema(records, G, coloring, DEFAULT_ROOMS)

    js_code = (
        "// Mock data — 4,000 students across 3 campus blocks (CB, AB1, AB2)\n"
        "// 70 students per classroom, zero exam clashes via Welsh-Powell graph coloring\n\n"
        f"export const MOCK_DATA = {json.dumps(result, indent=2)};\n\n"
        "export const SLOT_PALETTE = [\n"
        "  '#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6',\n"
        "  '#06b6d4', '#ec4899', '#84cc16', '#f97316', '#6366f1',\n"
        "  '#14b8a6', '#a855f7', '#eab308', '#0ea5e9'\n"
        "];\n\n"
        "export function getSlotColor(slotId) {\n"
        "  return SLOT_PALETTE[(slotId - 1) % SLOT_PALETTE.length];\n"
        "}\n\n"
        "export const BLOCK_COLORS = {\n"
        "  CB:  '#3b82f6',\n"
        "  AB1: '#8b5cf6',\n"
        "  AB2: '#10b981'\n"
        "};\n"
    )

    out_path = '../frontend/src/mockData.js'
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write(js_code)

    print(f"Successfully generated {out_path}!")

if __name__ == '__main__':
    main()
