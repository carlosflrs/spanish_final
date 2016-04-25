import re

line_by_line = []
with open("axolotl.txt", "r") as f:
    find = re.compile(r"([^.]*).*")
    i = 0
    for line in f:
        match = re.search(find, line)
        while (len(match.group(0)) != 0):
            sentence = match.groups(0)[0]
            line = line[len(sentence)+2:]
            if (sentence != "\n"):
                line_by_line.append("'{}.',\n".format(sentence))
            match = re.search(find, line)

with open("axolotl_lineas.txt", "w+") as f:
    for line in line_by_line:
        f.write(line)

