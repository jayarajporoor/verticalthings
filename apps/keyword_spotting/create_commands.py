#user must update the paths below. Currently we are including a lot of paths in folder_includes.txt
#which might not be actually used while compilation. This will be fixed later.
DEVKIT_PATH = "/home/sharingan/Desktop/Work/Vertical_Things_Project/devkit-mbedos5-getstarted"
EDGEML_PATH = "/home/sharingan/Desktop/Work/Vertical_Things_Project/EdgeML"

file_names = ["compile_command.txt", "compile-config.json", "folder_includes.txt"]
for file_name in file_names:
    with open("Generic Commands/"+file_name, 'r') as file:
        old_data = file.read()
    new_data = old_data.replace("{DEVKIT_PATH}", DEVKIT_PATH)
    new_data = new_data.replace("{EDGEML_PATH}", EDGEML_PATH)
    with open("inc/"+file_name, 'w+') as file:
        file.write(new_data)
