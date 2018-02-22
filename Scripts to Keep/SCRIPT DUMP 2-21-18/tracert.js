s = args[0];
a = scan(s);
while(a[a.length - 1] != 'home'){
    s = a[0];
    a = scan(s);
    tprint(s);
}