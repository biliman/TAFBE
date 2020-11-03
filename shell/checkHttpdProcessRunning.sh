# 1) Create a single line script that returns the number of httpd processes that are running on the current machine
ps -e | grep httpd | grep -cv grep