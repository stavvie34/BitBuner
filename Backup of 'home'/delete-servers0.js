Srvs = ['server0-0', 'server0', 'server0-1', 'server0-2', 'server0-3', 'server0-4', 'server0-5', 'server0-6', 'server0-7', 'server0-8', 'server0-9', 'server0-10', 'server0-11', 'server0-12', 'server0-13', 'server0-14', 'server0-15', 'server0-16', 'server0-17', 'server0-18', 'server0-19', 'server0-20', 'server0-21', 'server0-22', 'server0-23', 'server0-24', 'server0', 'server1', 'server2', 'server3', 'server4', 'server5', 'server6', 'server7', 'server8', 'server9', 'server10', 'server11', 'server12', 'server13', 'server14', 'server15', 'server16', 'server17', 'server18', 'server19', 'server20', 'server21', 'server22', 'server23', 'server24'];

for (i = 0; i < Srvs.length; i = i + 1) {
    deleteServer(Srvs[i]);
}