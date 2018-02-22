servers = ['foodnstuff', 'sigma-cosmetics', 'joesguns', 'nectar-net', 'hong-fang-tea', 'harakiri-sushi', 'neo-net', 'zer0', 'max-hardware', 'iron-gym', 'phantasy', 'silver-helix', 'omega-net', 'crush-fitness', 'johnson-ortho', 'the-hub', 'comptek', 'netlink', 'rothman-uni', 'catalyst', 'summit-uni', 'rho-construction', 'millenium-fitness', 'aevum-police', 'alpha-ent', 'syscore', 'lexo-corp', 'snap-fitness', 'global-pharm', 'applied-energetics', 'unitalife', 'nova-med', 'zb-def', 'zb-institute', 'vitalife', 'titan-labs', 'solaris', 'microdyne', 'helios', 'deltaone', 'icarus', 'omnia', 'defcomm', 'galactic-cyber', 'infocomm', 'taiyang-digital', 'stormtech', 'aerocorp', 'clarkeinc', 'omnitek', '4sigma', 'blade', 'b-and-a', 'ecorp', 'fulcrumtech', 'megacorp', 'kuai-gong', 'fulcrumassets', 'powerhouse-fitness'];

purchasedServers = [];

script = args[0];
target = args[1];
scriptRam = getScriptRam('base-target.script', 'home');
allServerRam = getScriptRam('all-server.script', 'home');
portBusters = [];
killCurrentScripts = [];
userStartMoney = getServerMoneyAvailable('home');

//Asks to double check if you really want to run with that script and use it on that server
if (prompt('Are you sure you want to execute ' + script + ' on all servers to attack ' + target + '?') === true) {
    
	numPortsRequiredTarget = (getServerNumPortsRequired(target));
	hackingLevelRequiredTarget = (getServerRequiredHackingLevel(target));
	userHackingLevel = (getHackingLevel());

	//If you don't have a high enough hacking level
	if (userHackingLevel < hackingLevelRequiredTarget) {
		tprint('You do not have a high enough hacking level for ' + target + '.');
	} else {
		//Need to have root access to target in order to do anything
		//REQUIRES THAT YOU DIDN'T SKIP THE ORDER IN GETTING PORT BUSTERS
		//Add port busters to array
		if (fileExists('brutessh.exe', 'home') === true) {
			portBusters.push('brutessh.exe');
			tprint('You own BruteSSH.exe');
		}

		if (fileExists('ftpcrack.exe', 'home') === true) {
			portBusters.push('ftpcrack.exe');
			tprint('You own FTPCrack.exe');
		}

		if (fileExists('relaysmtp.exe', 'home') === true) {
			portBusters.push('relaysmtp.exe');
			tprint('You own relaySMTP.exe');
		}

		if (fileExists('httpworm.exe', 'home') === true) {
			portBusters.push('httpworm.exe');
			tprint('You own HTTPWorm.exe');
		}

		if (fileExists('sqlinject.exe', 'home') === true) {
			portBusters.push('sqlinject.exe');
			tprint('You own SQLInject.exe');
		}
			
		//You already have root access
		if ((hasRootAccess(target)) === true) {
			tprint('You already have root access on ' + target + '.');
		} else {
			//You don't have enough port busters
			if ((portBusters.length) < numPortsRequiredTarget) {
				tprint('You do not own enough port busters to gain root access to ' + target + '.');
				tprint('Moving on to next server.');
			} else {
				//Opening ports
				if ((portBusters.length) === 1) {
					brutessh(target);
					tprint('Opened port with BruteSSH.');
				}

				if ((portBusters.length) === 2) {
					brutessh(target);
					tprint('Opened port with BruteSSH.');
					ftpcrack(target);
					tprint('Opened port with FTPCrack.');
				}

				if ((portBusters.length) === 3) {
					brutessh(target);
					tprint('Opened port with BruteSSH.');
					ftpcrack(target);
					tprint('Opened port with FTPCrack.');
					relaysmtp(target);
					tprint('Opened port with relaySMTP.');
				}

				if ((portBusters.length) === 4) {
					brutessh(target);
					tprint('Opened port with BruteSSH.');
					ftpcrack(target);
					tprint('Opened port with FTPCrack.');
					relaysmtp(target);
					tprint('Opened port with relaySMTP.');
					httpworm(target);
					tprint('Opened port with HTTPWorm.');
				}

				if ((portBusters.length) === 5) {
					brutessh(target);
					tprint('Opened port with BruteSSH.');
					ftpcrack(target);
					tprint('Opened port with FTPCrack.');
					relaysmtp(target);
					tprint('Opened port with relaySMTP.');
					httpworm(target);
					tprint('Opened port with HTTPWorm.');
					sqlinject(target);
					tprint('Opened port with SQLInject.');
				}

				nuke(target);
				tprint('You now have root access to ' + target + '.');
			}
		}
	}
		
	//Asks to see if you want to be running the script on your home machine while this is going on. Will also run "sleeper" script on foodnstuff
	//Sleeper script waits until this is done, kills everything on home, then runs the script with the maximum amount of threads possible
	if (prompt('Would you like to run ' + script + ' on your home machine with the maximum amount of threads?') === true) {
		totalRam = (getServerRam('home')[0]);
		usedRam = (getServerRam('home')[1]);
		maxThreads = (Math.floor((totalRam - usedRam) / (scriptRam)));

		exec(script, 'home', maxThreads, target);
		tprint('Script is now running on your home machine.');
		nuke('foodnstuff');
		killall('foodnstuff');
		scp('sleeper.script', 'foodnstuff');
		sleep(5000);
		exec('sleeper.script', 'foodnstuff', 1, script, target);
		tprint('Sleeper script is now running on foodnstuff.');
	} else {
		tprint('Decided not to run script on home machine.');			
	}

	//Asks to see if you want to try buying servers
	if (prompt('Do you want to purchase servers and run ' + script + ' on them?') === true) {
		homeMoney = getServerMoneyAvailable('home');
		moneyPossibleServers = Math.floor(homeMoney / 51200000);
		currentPurchasedServers = getPurchasedServers();
		limitServers = (25 - currentPurchasedServers.length);
		maxPossibleServers = Math.min(moneyPossibleServers, limitServers);	

		//If you have less than the maximum allowed 25 servers
		if ((currentPurchasedServers.length < 25) === true) {
			//If you have enough money for 1 server
			if ((userStartMoney > 51200000) === true) {
				//Asks to tell you how many you can buy, and if you want to go forward with that
				if (prompt('You can currently purchase a maximum of ' + maxPossibleServers + ' servers. Would you like to continue?') === true) {
					
					//Start at the max number of possible servers you can buy. Keep buying until that number is 0. 
					for (i = maxPossibleServers; i > 0; i = i - 1) {
						purchasedServersArray = getPurchasedServers();
						j = purchasedServersArray.length;
						currentPurchasedServer = ('server-' + (j + 1));
						purchaseServer(currentPurchasedServer, 1024);
						tprint('Purchased a server and named it ' + currentPurchasedServer + '.');
						purchasedServers.push(currentPurchasedServer);

						totalRam = (getServerRam(currentPurchasedServer)[0]);
						usedRam = (getServerRam(currentPurchasedServer)[1]);
						maxThreads = (Math.floor((totalRam) / (scriptRam)));

						scp(script, currentPurchasedServer);
						exec(script, currentPurchasedServer, maxThreads, target);
						tprint('Script is now running on ' + currentPurchasedServer + '.');
						tprint('Moving on to next server.');
					}
					
					/*
					
					
					//You currently have less servers than your max possible servers
					//i.e. you have 10 servers, but can purchase 15 more
					if (currentPurchasedServers.length < maxPossibleServers) {
						//Start at the number of servers you have
						//Loop until you have no less than your maximum amount of servers you can buy
						for (i = currentPurchasedServers.length; i < maxPossibleServers; i = i + 1) {
							currentPurchasedServer = ('server-' + i);
							purchaseServer(currentPurchasedServer, 1024);
							tprint('Purchased a server and named it ' + currentPurchasedServer + '.');
							purchasedServers.push(currentPurchasedServer);

							totalRam = (getServerRam(currentPurchasedServer)[0]);
							usedRam = (getServerRam(currentPurchasedServer)[1]);
							maxThreads = (Math.floor((totalRam) / (scriptRam)));

							scp(script, currentPurchasedServer);
							exec(script, currentPurchasedServer, maxThreads, target);
							tprint('Script is now running on ' + currentPurchasedServer + '.');
							tprint('Moving on to next server.');
						}
					}
					
					//You have the exact same number of purchased servers as your max possible servers
					//i.e. You have 5 servers and you can only purchase 5 servers
					if (currentPurchasedServers.length == maxPossibleServers) {
						//Start at the max number of possible servers you can buy. Keep buying until that number is 0. 
						for (i = maxPossibleServers; i > 0; i = i - 1) {
							j = (currentPurchasedServers.length + 1);
							currentPurchasedServer = ('server-' + j);
							purchaseServer(currentPurchasedServer, 1024);
							tprint('Purchased a server and named it ' + currentPurchasedServer + '.');
							purchasedServers.push(currentPurchasedServer);

							totalRam = (getServerRam(currentPurchasedServer)[0]);
							usedRam = (getServerRam(currentPurchasedServer)[1]);
							maxThreads = (Math.floor((totalRam) / (scriptRam)));

							scp(script, currentPurchasedServer);
							exec(script, currentPurchasedServer, maxThreads, target);
							tprint('Script is now running on ' + currentPurchasedServer + '.');
							tprint('Moving on to next server.');
						}
					}
					
					//You currently have more servers than the maximum amount of servers you can purchase
					//i.e. You have 20 servers and can only buy 2 more
					if (currentPurchasedServers.length > maxPossibleServers) {
						//Start at the number of servers you have, 
						for (i = maxPossibleServers; i > 0; i = i - 1) {
							j = (currentPurchasedServers.length + 1);
							currentPurchasedServer = ('server-' + j);
							purchaseServer(currentPurchasedServer, 1024);
							tprint('Purchased a server and named it ' + currentPurchasedServer + '.');
							purchasedServers.push(currentPurchasedServer);

							totalRam = (getServerRam(currentPurchasedServer)[0]);
							usedRam = (getServerRam(currentPurchasedServer)[1]);
							maxThreads = (Math.floor((totalRam) / (scriptRam)));

							scp(script, currentPurchasedServer);
							exec(script, currentPurchasedServer, maxThreads, target);
							tprint('Script is now running on ' + currentPurchasedServer + '.');
							tprint('Moving on to next server.');
						}
					}
					
					//You currently have less servers than your max possible servers
					if ((currentPurchasedServers.length < maxPossibleServers) === true) {
						for (i = currentPurchasedServers.length; i < maxPossibleServers; i = i + 1) {
							currentPurchasedServer = ('server-' + i);
							purchaseServer(currentPurchasedServer, 1024);
							tprint('Purchased a server and named it ' + currentPurchasedServer + '.');
							purchasedServers.push(currentPurchasedServer);

							totalRam = (getServerRam(currentPurchasedServer)[0]);
							usedRam = (getServerRam(currentPurchasedServer)[1]);
							maxThreads = (Math.floor((totalRam) / (scriptRam)));

							scp(script, currentPurchasedServer);
							exec(script, currentPurchasedServer, maxThreads, target);
							tprint('Script is now running on ' + currentPurchasedServer + '.');
							tprint('Moving on to next server.');
						}
						//You currently have the same number of servers and max possible servers
					} else if ((currentPurchasedServers.length = maxPossibleServers) === true) {
						for (i = currentPurchasedServers.length; i < 25; i = i + 1) {
							currentPurchasedServer = ('server-' + i);
							purchaseServer(currentPurchasedServer, 1024);
							tprint('Purchased a server and named it ' + currentPurchasedServer + '.');
							purchasedServers.push(currentPurchasedServer);

							totalRam = (getServerRam(currentPurchasedServer)[0]);
							usedRam = (getServerRam(currentPurchasedServer)[1]);
							maxThreads = (Math.floor((totalRam) / (scriptRam)));

							scp(script, currentPurchasedServer);
							exec(script, currentPurchasedServer, maxThreads, target);
							tprint('Script is now running on ' + currentPurchasedServer + '.');
							tprint('Moving on to next server.');
						}
					} else {
						//You have more servers than your max possible servers
						for (j = 0; j < maxPossibleServers; j = j + 1) {
							i = currentPurchasedServers.length;
							currentPurchasedServer = ('server-' + i);
							purchaseServer(currentPurchasedServer, 1024);
							tprint('Purchased a server and named it ' + currentPurchasedServer + '.');
							purchasedServers.push(currentPurchasedServer);

							totalRam = (getServerRam(currentPurchasedServer)[0]);
							usedRam = (getServerRam(currentPurchasedServer)[1]);
							maxThreads = (Math.floor((totalRam) / (scriptRam)));

							scp(script, currentPurchasedServer);
							exec(script, currentPurchasedServer, maxThreads, target);
							tprint('Script is now running on ' + currentPurchasedServer + '.');
							tprint('Moving on to next server.');
						}
					}
					
					*/				
					
				} else {
					tprint('Decided not to purchase servers. Moving onto regular servers.');
				}
			} else {
				tprint('Unfortunately, you do not have enough money to buy a server.');
			} 				
		} else {
			tprint('You already have the maximum amount of purchased servers.');
		}
	} else {
		tprint('Decided not to purchase servers. Moving onto regular servers.');
	}
	
	//Asks to see if you want to overwrite scripts on servers already running the script
	//Useful if you want to change the money threshold in the script for how much you want to hack
	if (prompt('Would you like to overwrite scripts on your purchased servers?') === true) {
		//homeMoney = getServerMoneyAvailable('home');
		//moneyPossibleServers = Math.floor(homeMoney / 51200000);
		currentPurchasedServers = getPurchasedServers();
		//limitServers = (25 - currentPurchasedServers.length);
		//maxPossibleServers = Math.min(moneyPossibleServers, limitServers);	

		for (i = 1; i < (currentPurchasedServers.length + 1); i = i + 1) {
			currentPurchasedServer = ('server-' + i);
			//purchaseServer(currentPurchasedServer, 1024);
			//tprint('Purchased a server and named it ' + currentPurchasedServer + '.');
			//purchasedServers.push(currentPurchasedServer);

			totalRam = (getServerRam(currentPurchasedServer)[0]);
			usedRam = (getServerRam(currentPurchasedServer)[1]);
			maxThreads = (Math.floor((totalRam) / (scriptRam)));

			scp(script, currentPurchasedServer);
			killall(currentPurchasedServer);
			sleep(8000);
			exec(script, currentPurchasedServer, maxThreads, target);
			tprint('Script is now running on ' + currentPurchasedServer + '.');
			tprint('Moving on to next server.');
		}
	} else {
		tprint('Decided not to overwrite scripts on purchased servers.');
	}	

	if (prompt('Would you like to continue with main servers?') === true) {
		tprint('////////////////////////////////////////');
		tprint('---------- Working on Servers ----------');
		tprint('////////////////////////////////////////');

		if (prompt('Do you want to overwrite scripts on servers that are currently running?') === true) {       

			for (i = 0; i < servers.length; i = i + 1) {
				currentServer = servers[i];
				numPortsRequired = (getServerNumPortsRequired(currentServer));
				hackingLevelRequired = (getServerRequiredHackingLevel(currentServer));
				userHackingLevel = (getHackingLevel());

				tprint('//////////////////////////////////////////////////////');
				tprint('---------- Working on ' + currentServer + ' ----------');
				tprint('//////////////////////////////////////////////////////');


				if (userHackingLevel < hackingLevelRequired) {
					tprint('You do not have a high enough hacking level for ' + currentServer + '.');
					tprint('Moving on to next server.');
				} else {

					//REQUIRES THAT YOU HAVE EACH PORT BUSTER IN ORDER AND DIDN'T SKIP IN GETTING ONE

					//You already have root access
					if ((hasRootAccess(currentServer)) === true) {
						tprint('You already have root access on ' + currentServer + '.');
					} else {
						//You don't have enough port busters
						if ((portBusters.length) < numPortsRequired) {
							tprint('You do not own enough port busters to gain root access to ' + currentServer + '.');
							tprint('Moving on to next server.');
						} else {
							//Opening ports
							if ((portBusters.length) === 1) {
								brutessh(currentServer);
								tprint('Opened port with BruteSSH.');
							}

							if ((portBusters.length) === 2) {
								brutessh(currentServer);
								tprint('Opened port with BruteSSH.');
								ftpcrack(currentServer);
								tprint('Opened port with FTPCrack.');
							}

							if ((portBusters.length) === 3) {
								brutessh(currentServer);
								tprint('Opened port with BruteSSH.');
								ftpcrack(currentServer);
								tprint('Opened port with FTPCrack.');
								relaysmtp(currentServer);
								tprint('Opened port with relaySMTP.');
							}

							if ((portBusters.length) === 4) {
								brutessh(currentServer);
								tprint('Opened port with BruteSSH.');
								ftpcrack(currentServer);
								tprint('Opened port with FTPCrack.');
								relaysmtp(currentServer);
								tprint('Opened port with relaySMTP.');
								httpworm(currentServer);
								tprint('Opened port with HTTPWorm.');
							}

							if ((portBusters.length) === 5) {
								brutessh(currentServer);
								tprint('Opened port with BruteSSH.');
								ftpcrack(currentServer);
								tprint('Opened port with FTPCrack.');
								relaysmtp(currentServer);
								tprint('Opened port with relaySMTP.');
								httpworm(currentServer);
								tprint('Opened port with HTTPWorm.');
								sqlinject(currentServer);
								tprint('Opened port with SQLInject.');
							}

							nuke(currentServer);
							tprint('You now have root access to ' + currentServer + '.');
						}
					}

					totalRam = (getServerRam(currentServer)[0]);
					usedRam = (getServerRam(currentServer)[1]);
					maxThreads = (Math.floor((totalRam) / (scriptRam)));

					if (((currentServer == 'foodnstuff') === true) && ((scriptRunning('sleeper.script', 'foodnstuff')) === true)) {
						tprint('Ignoring foodnstuff. Want to keep sleeper script going.');
					} else {
						if (usedRam > 0) {
							tprint('Killing all scripts on ' + currentServer + '.');
							killall(currentServer);
							sleep(8000);
						}
					}
					

					if (scriptRam > totalRam) {
						tprint('There is not enough RAM on ' + currentServer + ' to run the script.');
						tprint('Moving on to next server.');
					} else {
						scp(script, currentServer);
						exec(script, currentServer, maxThreads, target);
						if (isRunning(script, currentServer, target) === true) {
							tprint(script + ' is now running on ' + currentServer + '.');
						}
					}
				}
			}
		} else {
			
			//Chose not to overwrite scripts on servers, so itt just leaves servers that are already running the script alone
			for (i = 0; i < servers.length; i = i + 1) {
				currentServer = servers[i];
				numPortsRequired = (getServerNumPortsRequired(currentServer));
				hackingLevelRequired = (getServerRequiredHackingLevel(currentServer));
				userHackingLevel = (getHackingLevel());

				tprint('//////////////////////////////////////////////////////');
				tprint('---------- Working on ' + currentServer + ' ----------');
				tprint('//////////////////////////////////////////////////////');

				if (userHackingLevel < hackingLevelRequired) {
					tprint('You do not have a high enough hacking level for ' + currentServer + '.');
					tprint('Moving on to next server.');
				} else {

					//REQUIRES THAT YOU HAVE EACH PORT BUSTER IN ORDER AND DIDN'T SKIP IN GETTING ONE

					//You already have root access
					if ((hasRootAccess(currentServer)) === true) {
						tprint('You already have root access on ' + currentServer + '.');
					} else {
						//You don't have enough port busters
						if ((portBusters.length) < numPortsRequired) {
							tprint('You do not own enough port busters to gain root access to ' + currentServer + '.');
							tprint('Moving on to next server.');
						} else {
							//Opening ports
							if ((portBusters.length) === 1) {
								brutessh(currentServer);
								tprint('Opened port with BruteSSH.');
							}

							if ((portBusters.length) === 2) {
								brutessh(currentServer);
								tprint('Opened port with BruteSSH.');
								ftpcrack(currentServer);
								tprint('Opened port with FTPCrack.');
							}

							if ((portBusters.length) === 3) {
								brutessh(currentServer);
								tprint('Opened port with BruteSSH.');
								ftpcrack(currentServer);
								tprint('Opened port with FTPCrack.');
								relaysmtp(currentServer);
								tprint('Opened port with relaySMTP.');
							}

							if ((portBusters.length) === 4) {
								brutessh(currentServer);
								tprint('Opened port with BruteSSH.');
								ftpcrack(currentServer);
								tprint('Opened port with FTPCrack.');
								relaysmtp(currentServer);
								tprint('Opened port with relaySMTP.');
								httpworm(currentServer);
								tprint('Opened port with HTTPWorm.');
							}

							if ((portBusters.length) === 5) {
								brutessh(currentServer);
								tprint('Opened port with BruteSSH.');
								ftpcrack(currentServer);
								tprint('Opened port with FTPCrack.');
								relaysmtp(currentServer);
								tprint('Opened port with relaySMTP.');
								httpworm(currentServer);
								tprint('Opened port with HTTPWorm.');
								sqlinject(currentServer);
								tprint('Opened port with SQLInject.');
							}

							nuke(currentServer);
							tprint('You now have root access to ' + currentServer + '.');
						}
					}

					totalRam = (getServerRam(currentServer)[0]);
					usedRam = (getServerRam(currentServer)[1]);
					maxThreads = (Math.floor((totalRam) / (scriptRam)));

					if (usedRam > 0) {
						tprint('Script already running on ' + currentServer + '.');
						tprint('Moving on to next server.');
					} else {
						if (scriptRam > totalRam) {
						tprint('There is not enough RAM on ' + currentServer + ' to run the script.');
						tprint('Moving on to next server.');
						} else {
							scp(script, currentServer);
							exec(script, currentServer, maxThreads, target);
							if (isRunning(script, currentServer, target) === true) {
								tprint(script + ' is now running on ' + currentServer + '.');
							}
						}
					}
				}
			}
		}


		tprint('///////////////////////////////////////////////////////////////////////');
		tprint('---------- Successfully ran base script on all servers ----------');
		tprint('///////////////////////////////////////////////////////////////////////');
		tprint(' ');
	} else {
		tprint('Okie doke. Killing script.');
	}
}


tprint('///////////////////////////////////');
tprint('---------- *** DONE! *** ----------');
tprint('///////////////////////////////////');