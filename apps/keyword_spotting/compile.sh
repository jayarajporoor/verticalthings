#the create_commands.py file creates the commands needed to compile the vt and generated cc code
#currently we have dependencies in both EdgeML and devkit, this is NOT a standalone application.
#user must give path to the above mentioned in create_commands so that paths to all dependencies are made.
python3 create_commands.py

nodejs  ../../compiler/src2/vtcompiler.js main.vt -config inc/compile-config.json -entry main -code out/main.cc
echo "vt compilation done"
$(cat inc/compile_command.txt | tr '\n' ' ')
#moving the generated object and dependency files to out folder
#the 2>/dev/null is to silence the command
mv main.d out/ 2>/dev/null
mv main.o out/ 2>/dev/null
echo "Keep calm and continue to code, you still have a LOT to do"