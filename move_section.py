import sys

file_path = "app/services/website-development/page.tsx"

with open(file_path, "r") as f:
    lines = f.readlines()

start_idx = -1
end_idx = -1

for i, line in enumerate(lines):
    if "{/* 16️⃣ Free Consultation Form Section */}" in line:
        start_idx = i
    if "{/* Final CTA Section */}" in line:
        end_idx = i

if start_idx != -1 and end_idx != -1:
    section_lines = lines[start_idx:end_idx]
    
    # modify the section comments & styling to better fit hero if needed
    for i in range(len(section_lines)):
        if "16️⃣ Free Consultation Form Section" in section_lines[i]:
            section_lines[i] = section_lines[i].replace("16️⃣ Free Consultation Form Section", "1️⃣ Hero Section")
        if "py-32 px-6 reveal-section" in section_lines[i]:
            # make it hero section styling (pt border on top)
            section_lines[i] = section_lines[i].replace("py-32", "pt-40 pb-20")

    # insert at the top, just before {/* 2️⃣ Why Your Business Needs a Website */}
    insert_idx = -1
    for i, line in enumerate(lines[:start_idx]): # only search BEFORE the start block
        if "{/* 2️⃣ Why Your Business Needs a Website */}" in line:
            insert_idx = i
            break
            
    if insert_idx != -1:
        # Construct new file content
        part1 = lines[:insert_idx]
        part2 = section_lines
        part3 = ["\n\n"]
        part4 = lines[insert_idx:start_idx]
        part5 = lines[end_idx:]
        
        target_lines = part1 + part2 + part3 + part4 + part5
        with open(file_path, "w") as f:
            f.writelines(target_lines)
        print(f"Successfully moved lines {start_idx} to {end_idx} to line {insert_idx}")
    else:
        print("Could not find insert index.")
else:
    print(f"Could not find section. start_idx: {start_idx}, end_idx: {end_idx}")
