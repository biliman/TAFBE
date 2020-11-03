# change txt to dat
for fn in ./mig33/inner.folder/*.txt;
   do mv "$fn" "${fn/.txt}.dat";
done;

# change dat to txt
# for fn in ./mig33/inner.folder/*.dat;
#    do mv "$fn" "${fn/.dat}.txt";
# done;