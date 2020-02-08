nodejs  ../../compiler/src2/vtcompiler.js main.vt -config compile-config.json -entry main -code MXChip-SRNN/main.cpp

devkit_path="/home/sharingan/Desktop/Work/Vertical_Things_Project/devkit-mbedos5-getstarted/"
sed -i 's/int main(){/void loop(){/g' 'MXChip-SRNN/main.cpp'
sed -i 's/return 0;/return;/g' 'MXChip-SRNN/main.cpp'
echo "\nvoid setup(){}" >> 'MXChip-SRNN/main.cpp'
cp -rf MXChip-SRNN $devkit_path/
echo "Keep calm and continue to code, you still have a LOT to do"