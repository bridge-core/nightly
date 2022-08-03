const t=`{
	"general": {
		"yes": "\u662F",
		"no": "\u5426",
		"okay": "\u597D",
		"confirm": "\u78BA\u8A8D",
		"cancel": "\u53D6\u6D88",
		"close": "\u95DC\u9589",
		"reload": "\u91CD\u65B0\u8F09\u5165",
		"information": "\u8CC7\u8A0A",
		"continue": "\u7E7C\u7E8C",
		"delete": "\u522A\u9664",
		"skip": "\u8DF3\u904E",
		"selectFolder": "\u9078\u53D6\u8CC7\u6599\u593E",
		"fileName": "\u6A94\u6848\u540D\u7A31",
		"confirmOverwriteFile": "\u5DF2\u5B58\u5728\u76F8\u540C\u540D\u7A31\u7684\u6A94\u6848\uFF0C\u662F\u5426\u8981\u8986\u5BEB?"
	},
	"packType": {
		"behaviorPack": {
			"name": "\u884C\u70BA\u5305",
			"description": "\u5728\u904A\u6232\u4E2D\u5275\u9020\u65B0\u7684\u6A5F\u5236\uFF0C\u4EE5\u53CA\u4FEE\u6539Minecraft\u7684\u884C\u70BA\u3002"
		},
		"resourcePack": {
			"name": "\u8CC7\u6E90\u5305",
			"description": "\u7528\u65BC\u4FEE\u6539Minecrat\u7684\u5916\u89C0\u548C\u97F3\u6548"
		},
		"skinPack": {
			"name": "\u5916\u89C0\u5305",
			"description": "\u5275\u5EFA\u53EF\u4EE5\u8B93\u73A9\u5BB6\u81EA\u7531\u4F7F\u7528\u7684\u5168\u65B0\u5916\u89C0\u3002"
		},
		"worldTemplate": {
			"name": "\u4E16\u754C\u7BC4\u672C",
			"description": "\u5275\u9020\u8B93\u73A9\u5BB6\u80FD\u5920\u9AD4\u9A57\u4F60\u7684\u5C08\u6848\u7684\u4E16\u754C\u3002"
		}
	},
	"fileType": {
		"manifest": "Manifest",
		"animation": "\u52D5\u756B",
		"animationController": "\u52D5\u756B\u63A7\u5236\u5668",
		"biome": "\u751F\u614B\u57DF",
		"block": "\u65B9\u584A",
		"bridgeConfig": "bridge.\u5C08\u6848\u8A2D\u5B9A",
		"dialogue": "\u5C0D\u8A71\u6846",
		"entity": "\u5BE6\u9AD4",
		"feature": "\u5730\u7269",
		"featureRule": "\u5730\u7269\u751F\u6210\u898F\u5247",
		"functionTick": "Tick\u51FD\u6578",
		"function": "\u51FD\u6578",
		"item": "\u7269\u54C1",
		"lootTable": "\u6230\u5229\u54C1\u8868",
		"recipe": "\u5408\u6210\u914D\u65B9",
		"clientScript": "\u4F7F\u7528\u8005\u7AEF\u8173\u672C",
		"serverScript": "\u4F3A\u670D\u5668\u7AEF\u8173\u672C",
		"script": "\u8173\u672C",
		"spawnRule": "\u751F\u6210\u898F\u5247",
		"mcstructure": "\u7D50\u69CB",
		"tradeTable": "\u4EA4\u6613\u8868",
		"clientManifest": "\u4F7F\u7528\u8005\u7AEFManifest",
		"skinManifest": "\u5916\u89C0Manifest",
		"geometry": "\u5E7E\u4F55\u9AD4",
		"customComponent": "\u7D44\u4EF6",
		"clientAnimation": "\u4F7F\u7528\u8005\u7AEF\u52D5\u756B",
		"clientAnimationController": "\u4F7F\u7528\u8005\u7AEF\u52D5\u756B\u63A7\u5236\u5668",
		"attachable": "\u53EF\u9644\u52A0\u7269\u54C1",
		"clientEntity": "\u4F7F\u7528\u8005\u7AEF\u5BE6\u9AD4",
		"clientItem": "\u4F7F\u7528\u8005\u7AEF\u7269\u54C1",
		"clientLang": "\u8A9E\u8A00",
		"fog": "\u9727",
		"particle": "\u7C92\u5B50",
		"renderController": "\u6E32\u67D3\u63A7\u5236\u5668",
		"texture": "\u6750\u8CEA",
		"textureSet": "\u6750\u8CEA\u96C6",
		"itemTexture": "\u7269\u54C1\u6750\u8CEA",
		"clientBlock": "\u4F7F\u7528\u8005\u7AEF\u65B9\u584A",
		"terrainTexture": "\u5730\u5F62\u6750\u8CEA",
		"flipbookTexture": "Flipbook\u6750\u8CEA",
		"clientBiome": "\u4F7F\u7528\u8005\u7AEF\u751F\u614B\u57DF",
		"soundDefinition": "\u8072\u97F3\u5B9A\u7FA9",
		"musicDefinition": "\u97F3\u6A02\u5B9A\u7FA9",
		"clientSound": "\u4F7F\u7528\u8005\u7AEF\u8072\u97F3",
		"skins": "\u5916\u89C0",
		"langDef": "\u8A9E\u8A00\u5B9A\u7FA9",
		"lang": "\u8A9E\u8A00",
		"molang": "Molang",
		"gameTest": "\u904A\u6232\u6E2C\u8A66",
		"unknown": "\u5176\u4ED6",
		"simpleFile": "\u7D14\u6A94\u6848",
		"ui": "UI",
		"volume": "\u529F\u80FD\u57DF",
		"worldManifest": "\u4E16\u754CManifest"
	},
	"actions": {
		"newProject": {
			"name": "\u65B0\u5EFA\u5C08\u6848",
			"description": "\u65B0\u5EFA\u4E00\u500Bbridge.\u5C08\u6848"
		},
		"newFile": { "name": "\u65B0\u589E\u6A94\u6848", "description": "\u65B0\u5EFA\u4E00\u500BAdd-On\u529F\u80FD" },
		"openFile": { "name": "\u958B\u555F\u6A94\u6848", "description": "\u5F9E\u6B64\u5C08\u6848\u958B\u555F\u6A94\u6848" },
		"searchFile": { "name": "\u641C\u5C0B\u6A94\u6848", "description": "\u5728\u6B64\u5C08\u6848\u4E2D\u641C\u5C0B" },
		"saveFile": { "name": "\u5132\u5B58\u6A94\u6848", "description": "\u5132\u5B58\u958B\u555F\u7684\u6A94\u6848" },
		"saveAs": {
			"name": "\u53E6\u5B58\u65B0\u6A94",
			"description": "\u4EE5\u4E0D\u540C\u6A94\u540D\u5132\u5B58\u958B\u555F\u7684\u6A94\u6848"
		},
		"saveAll": { "name": "\u5168\u90E8\u5132\u5B58", "description": "\u5132\u5B58\u5168\u90E8\u958B\u555F\u7684\u6A94\u6848" },
		"closeFile": { "name": "\u95DC\u9589\u6A94\u6848", "description": "\u95DC\u9589\u958B\u555F\u7684\u6A94\u6848" },
		"settings": { "name": "\u8A2D\u5B9A", "description": "\u958B\u555Fbridge.\u7684\u8A2D\u5B9A" },
		"extensions": {
			"name": "\u64F4\u5145\u5143\u4EF6",
			"description": "\u5B89\u88DD\u548C\u7BA1\u7406\u64F4\u5145\u5143\u4EF6"
		},
		"copy": { "name": "\u8907\u88FD", "description": "\u5C07\u9078\u53D6\u7684\u6587\u5B57\u8907\u88FD\u5230\u526A\u8CBC\u7C3F" },
		"cut": { "name": "\u526A\u4E0B", "description": "\u5C07\u9078\u53D6\u7684\u6587\u5B57\u526A\u4E0B" },
		"paste": { "name": "\u8CBC\u4E0A", "description": "\u8CBC\u4E0A\u526A\u8CBC\u7C3F\u7684\u5167\u5BB9" },
		"docs": { "name": "\u6587\u6A94", "description": "\u958B\u555FMinecraft Add-On\u6587\u6A94" },
		"releases": {
			"name": "\u767C\u884C\u7248",
			"description": "\u67E5\u770B\u6700\u65B0\u7684bridge.\u767C\u884C\u7248"
		},
		"bugReports": {
			"name": "\u554F\u984C\u56DE\u5831",
			"description": "\u56DE\u5831bridge.\u7684\u554F\u984C"
		},
		"extensionAPI": {
			"name": "\u64F4\u5145\u5143\u4EF6API",
			"description": "\u67E5\u770Bbridge.\u64F4\u5145\u5143\u4EF6API\u7684\u8AAA\u660E"
		},
		"gettingStarted": {
			"name": "\u65B0\u624B\u4E0A\u8DEF",
			"description": "\u67E5\u770B\u6211\u5011\u7684bridge.\u5165\u9580\u6307\u5357"
		},
		"faq": {
			"name": "\u5E38\u898B\u554F\u984C",
			"description": "\u67E5\u770B\u4F7F\u7528bridge.\u958B\u767CAdd-On\u5E38\u898B\u7684\u554F\u984C"
		},
		"reloadAutoCompletions": {
			"name": "\u91CD\u65B0\u8F09\u5165\u81EA\u52D5\u5B8C\u6210",
			"description": "\u91CD\u65B0\u8F09\u5165\u81EA\u52D5\u5B8C\u6210\u7684\u8CC7\u6599"
		},
		"reloadExtensions": {
			"name": "\u91CD\u65B0\u8F09\u5165\u64F4\u5145\u5143\u4EF6",
			"description": "\u91CD\u65B0\u8F09\u5165\u6240\u6709\u64F4\u5145\u5143\u4EF6"
		},
		"moveToSplitScreen": {
			"name": "\u79FB\u81F3\u5206\u5272\u8996\u7A97",
			"description": "\u5C07\u9019\u500B\u9801\u7C64\u79FB\u81F3\u65B0\u958B\u555F\u7684\u5206\u5272\u8996\u7A97"
		},
		"closeTab": { "name": "\u95DC\u9589\u9801\u7C64", "description": "\u95DC\u9589\u9019\u500B\u9801\u7C64" },
		"closeAll": { "name": "\u5168\u90E8\u95DC\u9589", "description": "\u95DC\u9589\u5168\u90E8\u7684\u9801\u7C64" },
		"closeTabsToRight": {
			"name": "\u95DC\u9589\u53F3\u908A\u7684\u9801\u7C64",
			"description": "\u95DC\u9589\u53F3\u908A\u6240\u6709\u7684\u9801\u7C64"
		},
		"closeAllSaved": {
			"name": "\u95DC\u9589\u5DF2\u5132\u5B58\u7684\u9801\u7C64",
			"description": "\u95DC\u9589\u6240\u6709\u5DF2\u5132\u5B58\u7684\u9801\u7C64"
		},
		"closeOtherTabs": {
			"name": "\u95DC\u9589\u5176\u4ED6\u9801\u7C64",
			"description": "\u95DC\u9589\u5176\u4ED6\u7684\u9801\u7C64"
		},
		"clearAllNotifications": {
			"name": "\u6E05\u9664\u5168\u90E8\u901A\u77E5",
			"description": "\u6E05\u9664\u5168\u90E8\u7684\u901A\u77E5"
		},
		"pluginInstallLocation": {
			"global": {
				"name": "\u5168\u57DF\u5B89\u88DD",
				"description": "\u6240\u6709\u5C08\u6848\u7686\u53EF\u4F7F\u7528\u5168\u57DF\u64F4\u5145\u5143\u4EF6"
			},
			"local": {
				"name": "\u5340\u57DF\u5B89\u88DD",
				"description": "\u50C5\u6709\u5B89\u88DD\u8A72\u64F4\u5145\u5143\u4EF6\u7684\u5C08\u6848\u53EF\u4EE5\u4F7F\u7528"
			}
		},
		"toObject": { "name": "\u8F49\u63DB\u6210\u7269\u4EF6" },
		"toArray": { "name": "\u8F49\u63DB\u6210\u9663\u5217" }
	},
	"toolbar": {
		"file": { "name": "\u6A94\u6848", "preferences": { "name": "\u504F\u597D\u8A2D\u5B9A" } },
		"edit": { "name": "\u7DE8\u8F2F" },
		"tools": { "name": "\u5DE5\u5177" },
		"help": { "name": "\u5E6B\u52A9" }
	},
	"sidebar": {
		"compiler": { "name": "\u7DE8\u8B6F\u5668" },
		"extensions": { "name": "\u64F4\u5145\u5143\u4EF6" },
		"notifications": {
			"socials": { "message": "\u793E\u7FA4\u5A92\u9AD4" },
			"gettingStarted": { "message": "\u65B0\u624B\u4E0A\u8DEF" },
			"installApp": { "message": "\u5B89\u88DD\u61C9\u7528\u7A0B\u5F0F" },
			"updateAvailable": { "message": "\u6709\u66F4\u65B0\u53EF\u7528" },
			"updateExtensions": "\u66F4\u65B0\u5168\u90E8\u7684\u64F4\u5145\u5143\u4EF6"
		}
	},
	"welcome": {
		"title": "\u6B61\u8FCE\u4F7F\u7528bridge.",
		"subtitle": "\u88FD\u4F5CMinecraft Add-On\u5F9E\u6C92\u5982\u6B64\u4FBF\u6377\u904E!",
		"quickActions": "\u5FEB\u6377\u52D5\u4F5C",
		"recentFiles": "\u6700\u8FD1\u958B\u555F\u7684\u6A94\u6848",
		"recentProjects": "\u6700\u8FD1\u7684\u5C08\u6848"
	},
	"windows": {
		"loadingWindow": {
			"titles": {
				"loading": "\u8F09\u5165\u4E2D...",
				"downloadingData": "\u4E0B\u8F09\u65B0\u8CC7\u6599..."
			}
		},
		"changelogWindow": { "title": "\u65B0\u529F\u80FD" },
		"openFile": {
			"title": "\u958B\u555F",
			"search": "\u641C\u5C0B\u6A94\u6848...",
			"noData": "\u6C92\u6709\u7D50\u679C..."
		},
		"createProject": {
			"welcome": "\u6B61\u8FCE\u4F7F\u7528bridge.!",
			"welcomeDescription": "\u65B0\u589E\u4F60\u7684\u7B2C\u4E00\u500B\u5C08\u6848\u3002",
			"omitPack": "\u5FFD\u7565",
			"selectedPack": "\u5DF2\u9078\u53D6",
			"title": "\u65B0\u589E\u5C08\u6848",
			"packIcon": "\u5C08\u6848\u5716\u793A(\u9078\u64C7\u6027)",
			"projectName": "\u5C08\u6848\u540D\u7A31",
			"projectDescription": "\u5C08\u6848\u7C21\u4ECB(\u9078\u64C7\u6027)",
			"projectPrefix": "\u5C08\u6848\u524D\u7DB4",
			"projectAuthor": "\u5C08\u6848\u4F5C\u8005",
			"projectTargetVersion": "\u5C08\u6848\u5C0D\u61C9\u7684Minecraft\u7248\u672C",
			"scripting": "\u555F\u7528\u8173\u672CAPI",
			"gameTest": "\u555F\u7528\u904A\u6232\u6E2C\u8A66\u6846\u67B6",
			"rpAsBpDependency": "\u5C07\u8CC7\u6E90\u5305\u8A3B\u518A\u70BA\u884C\u70BA\u5305\u7684\u5957\u4EF6\u76F8\u4F9D\u6027",
			"useLangForManifest": "\u76F4\u63A5\u5C07\u5305\u540D\u548C\u7C21\u4ECB\u6DFB\u52A0\u81F3manifest\u6A94\u6848",
			"create": "\u65B0\u589E"
		},
		"createPreset": {
			"title": "\u65B0\u589E\u9810\u8A2D\u96C6",
			"searchPresets": "\u641C\u5C0B\u9810\u8A2D\u96C6...",
			"overwriteFiles": "\u9019\u500B\u9810\u8A2D\u96C6\u6703\u8986\u5BEB\u4E00\u6216\u591A\u500B\u6A94\u6848\uFF0C\u662F\u5426\u7E7C\u7E8C?",
			"overwriteFilesConfirm": "\u78BA\u8A8D",
			"overwriteUnsavedChanges": "\u9019\u500B\u9810\u8A2D\u96C6\u6703\u8986\u5BEB\u4E00\u6216\u591A\u500B\u672A\u5132\u5B58\u8B8A\u66F4\u7684\u6A94\u6848\uFF0C\u662F\u5426\u7E7C\u7E8C?",
			"overwriteUnsavedChangesConfirm": "\u78BA\u8A8D",
			"validationRule": {
				"alphanumeric": "\u53EA\u80FD\u4F7F\u7528\u82F1\u6578\u7B26\u865F\u6216\u8005\u4E0B\u5283\u7DDA",
				"lowercase": "\u53EA\u80FD\u4F7F\u7528\u5C0F\u5BEB",
				"required": "\u6B64\u6B04\u4F4D\u70BA\u5FC5\u586B",
				"noEmptyFolderNames": "\u8CC7\u6599\u593E\u540D\u7A31\u4E0D\u53EF\u7A7A\u767D"
			}
		},
		"deleteProject": {
			"confirm": "\u522A\u9664",
			"description": "\u662F\u5426\u8981\u522A\u9664\u9019\u500B\u5C08\u6848?"
		},
		"socials": {
			"title": "\u793E\u7FA4\u5A92\u9AD4",
			"content": "\u67E5\u770Bbridge.\u7684\u5B98\u65B9Twitter\u548CGithub\uFF0C\u4EE5\u53CA\u52A0\u5165Discord\u7FA4\u7D44!",
			"discord": "Discord",
			"twitter": "Twitter",
			"github": "Github"
		},
		"projectChooser": {
			"title": "\u5C08\u6848",
			"searchProjects": "\u641C\u5C0B\u5C08\u6848...",
			"newProject": "\u65B0\u589E\u5C08\u6848"
		},
		"filePath": { "title": "\u9078\u64C7\u6A94\u6848\u8DEF\u5F91" },
		"packExplorer": {
			"title": "\u5957\u4EF6\u700F\u89BD\u5668",
			"searchFiles": "\u641C\u5C0B\u6A94\u6848...",
			"categories": "\u985E\u5225",
			"refresh": {
				"name": "\u91CD\u65B0\u8F09\u5165\u5C08\u6848",
				"description": "\u91CD\u65B0\u8F09\u5165\u76EE\u524D\u5C08\u6848\u4E2D\u65B0\u589E\u7684\u6A94\u6848"
			},
			"restartDevServer": {
				"name": "\u91CD\u65B0\u555F\u52D5Dev Server",
				"description": "\u662F\u5426\u8981\u91CD\u555F\u7DE8\u8B6F\u5668\u7684Dev Server? \u82B1\u8CBB\u7684\u6642\u9593\u4F9D\u7167\u4F60\u7684\u5C08\u6848\u5927\u5C0F\u800C\u5B9A\u3002"
			},
			"createPreset": "\u65B0\u589E\u6A94\u6848",
			"projectConfig": {
				"name": "\u958B\u555F\u5C08\u6848\u8A2D\u5B9A\u6A94",
				"missing": "\u770B\u4F86\u9019\u500B\u6A94\u6848\u6C92\u6709config.json\u3002\u5C08\u6848\u9700\u8981\u8A72\u6A94\u6848\u624D\u80FD\u6B63\u5E38\u904B\u4F5C\u3002"
			},
			"fileActions": {
				"delete": {
					"name": "\u522A\u9664",
					"description": "\u522A\u9664\u6A94\u6848\u6216\u8CC7\u6599\u593E",
					"confirmText": "\u662F\u5426\u8981\u522A\u9664\u9019\u500B\u6A94\u6848? \u6B64\u52D5\u4F5C\u7121\u6CD5\u9084\u539F!"
				},
				"rename": { "name": "\u91CD\u65B0\u547D\u540D", "description": "\u91CD\u65B0\u547D\u540D\u6A94\u6848" },
				"duplicate": { "name": "\u62F7\u8C9D", "description": "\u62F7\u8C9D\u6A94\u6848" },
				"revealFilePath": {
					"name": "\u986F\u793A\u6A94\u6848\u8DEF\u5F91",
					"description": "\u986F\u793A\u6A94\u6848\u6216\u8CC7\u6599\u593E\u7684\u5BE6\u969B\u4F4D\u7F6E"
				}
			}
		},
		"settings": {
			"title": "\u8A2D\u5B9A",
			"searchSettings": "\u641C\u5C0B\u8A2D\u5B9A...",
			"sidebar": {
				"name": "\u5074\u908A\u6B04",
				"sidebarRight": {
					"name": "\u5074\u908A\u6B04\u79FB\u81F3\u53F3\u65B9",
					"description": "\u5C07\u5074\u908A\u6B04\u79FB\u81F3\u87A2\u5E55\u53F3\u65B9"
				},
				"sidebarSize": {
					"name": "\u5074\u908A\u6B04\u5927\u5C0F",
					"description": "\u66F4\u6539\u5C55\u958B\u7684\u5074\u908A\u6B04\u5BEC\u5EA6\u3002"
				},
				"shrinkSidebarElements": {
					"name": "\u6536\u5408\u5074\u908A\u6B04\u5143\u7D20",
					"description": "\u6536\u5408bridge.\u7684\u5074\u908A\u6B04\u5143\u7D20"
				}
			},
			"appearance": {
				"name": "\u5916\u89C0",
				"colorScheme": {
					"name": "\u914D\u8272\u65B9\u6848",
					"description": "\u9078\u53D6bridge. UI\u7684\u914D\u8272\u65B9\u6848"
				},
				"darkTheme": {
					"name": "\u6DF1\u8272\u4E3B\u984C",
					"description": "\u9078\u53D6bridge.\u9810\u8A2D\u7684\u6DF1\u8272\u4E3B\u984C"
				},
				"lightTheme": {
					"name": "\u6DFA\u8272\u4E3B\u984C",
					"description": "\u9078\u53D6bridge.\u9810\u8A2D\u7684\u6DFA\u8272\u4E3B\u984C"
				},
				"localDarkTheme": {
					"name": "\u5340\u57DF\u6DF1\u8272\u4E3B\u984C",
					"description": "\u9078\u53D6\u76EE\u524D\u5C08\u6848\u7684\u6DF1\u8272\u4E3B\u984C"
				},
				"localLightTheme": {
					"name": "\u6DFA\u8272\u4E3B\u984C",
					"description": "\u9078\u53D6\u76EE\u524D\u5C08\u6848\u7684\u6DFA\u8272\u4E3B\u984C"
				}
			},
			"general": {
				"name": "\u4E00\u822C",
				"language": {
					"name": "\u8A9E\u8A00",
					"description": "\u9078\u53D6bridge.\u7684\u8A9E\u8A00"
				},
				"collaborativeMode": {
					"name": "\u5354\u4F5C\u6A21\u5F0F",
					"description": "\u5F37\u5236\u5728\u5207\u63DB\u5C08\u6848\u6642\u91CD\u65B0\u8F09\u5165\u5FEB\u53D6\u6A94\u6848\u3002\u50C5\u6709\u60A8\u4E00\u4EBA\u4F7F\u7528bridge.\u7DE8\u8F2F\u5C08\u6848\u6642\u95DC\u9589\u6B64\u9078\u9805\u3002"
				},
				"packSpider": {
					"name": "\u5957\u4EF6\u722C\u87F2",
					"description": "\u5957\u4EF6\u722C\u87F2\u6703\u7528\u865B\u64EC\u6A94\u6848\u7CFB\u7D71\u70BA\u5C08\u6848\u4E2D\u7684\u6A94\u6848\u5EFA\u7ACB\u9023\u7D50\uFF0C\u4E26\u986F\u793A\u4ED6\u5011\u7684\u95DC\u806F\u3002"
				},
				"formatOnSave": {
					"name": "\u5132\u5B58\u6642\u683C\u5F0F\u5316",
					"description": "\u5728\u5132\u5B58\u6642\u683C\u5F0F\u5316\u6A94\u6848"
				},
				"openLinksInBrowser": {
					"name": "\u5728\u700F\u89BD\u5668\u4E2D\u958B\u555F\u9023\u7D50",
					"description": "\u4F7F\u7528\u7CFB\u7D71\u9810\u8A2D\u700F\u89BD\u5668\u958B\u555F\u9023\u7D50\u3002"
				},
				"restoreTabs": {
					"name": "\u56DE\u5FA9\u9801\u7C64",
					"description": "\u958B\u555Fbirdge.\u6642\u56DE\u5FA9\u4E0A\u4E00\u6B21\u958B\u555F\u7684\u9801\u7C64\u3002"
				},
				"resetBridgeFolder": {
					"name": "\u9078\u53D6\u6839\u76EE\u9304",
					"description": "\u9078\u53D6bridge.\u904B\u4F5C\u7684\u4E3B\u8981\u76EE\u9304"
				}
			},
			"developer": {
				"name": "\u958B\u767C\u4EBA\u54E1",
				"simulateOS": {
					"name": "\u6A21\u64EC\u4F5C\u696D\u7CFB\u7D71",
					"description": "\u6A21\u64EC\u4F5C\u696D\u7CFB\u7D71\u7528\u65BC\u6E2C\u8A66\u7279\u5B9A\u7684\u884C\u70BA"
				},
				"devMode": {
					"name": "\u958B\u767C\u4EBA\u54E1\u6A21\u5F0F",
					"description": "\u958B\u555F\u958B\u767C\u4EBA\u54E1\u6A21\u5F0F"
				}
			},
			"actions": { "name": "\u52D5\u4F5C" },
			"editor": {
				"jsonEditor": {
					"name": "JSON\u7DE8\u8F2F\u5668",
					"description": "\u9078\u64C7\u7DE8\u8F2FJSON\u6A94\u6848\u7684\u65B9\u5F0F"
				},
				"wordWrap": {
					"name": "\u81EA\u52D5\u63DB\u884C",
					"description": "\u7A0B\u5F0F\u78BC\u81EA\u52D5\u63DB\u884C"
				}
			}
		},
		"projectFolder": {
			"title": "\u5C08\u6848\u8CC7\u6599\u593E",
			"content": "bridge.\u5FC5\u9808\u5B58\u53D6\u5C08\u6848\u8CC7\u6599\u593E"
		},
		"extensionStore": {
			"title": "\u64F4\u5145\u5143\u4EF6\u5546\u5E97",
			"searchExtensions": "\u641C\u5C0B\u64F4\u5145\u5143\u4EF6...",
			"activateExtension": "\u555F\u7528\u64F4\u5145\u5143\u4EF6",
			"deactivateExtension": "\u505C\u7528\u64F4\u5145\u5143\u4EF6",
			"offlineError": "\u7121\u6CD5\u8F09\u5165\u64F4\u5145\u5143\u4EF6\uFF0C\u8ACB\u78BA\u8A8D\u88DD\u7F6E\u5DF2\u9023\u4E0A\u7DB2\u8DEF\u3002"
		},
		"pluginInstallLocation": { "title": "\u9078\u64C7\u5B89\u88DD\u4F4D\u7F6E" },
		"unsavedFile": {
			"description": "\u662F\u5426\u5728\u95DC\u9589\u6A94\u6848\u524D\u5132\u5B58\u8B8A\u66F4?",
			"save": "\u5132\u5B58 & \u95DC\u9589"
		},
		"browserUnsupported": {
			"title": "\u4E0D\u652F\u63F4\u7684\u700F\u89BD\u5668",
			"description": "bridge.\u4E0D\u652F\u63F4\u4F60\u7684\u700F\u89BD\u5668\uFF0C\u8ACB\u4F7F\u7528\u96FB\u8166\u7248\u7684Chrome\u6216Edge!"
		},
		"invalidJson": {
			"title": "\u7121\u6548\u7684JSON",
			"description": "bridge.\u7684\u6A39\u72C0\u7DE8\u8F2F\u5668\u7121\u6CD5\u958B\u555F\u7121\u6548JSON\u6A94\u6848\uFF0C\u4F60\u53EF\u4EE5\u5207\u63DB\u6210\u300C\u7D14\u6587\u672C\u7DE8\u8F2F\u5668\u300D\u4FEE\u6539\u6A94\u6848\u3002"
		}
	},
	"taskManager": {
		"tasks": {
			"dataLoader": {
				"title": "\u4E0B\u8F09\u8CC7\u6599...",
				"description": "\u4E0B\u8F09\u7DE8\u8F2F\u5668\u7684\u6700\u65B0\u8CC7\u6599"
			},
			"packIndexing": {
				"title": "\u6AA2\u7D22\u5957\u4EF6\u4E2D",
				"description": "bridge.\u6B63\u5728\u70BA\u4F60\u7684\u5C08\u6848\u529F\u80FD\u8490\u96C6\u5FC5\u8981\u7684\u8CC7\u8A0A"
			},
			"compiler": {
				"title": "\u7DE8\u8B6F\u5C08\u6848",
				"description": "bridge.\u6B63\u5728\u7DE8\u8B6F\u53EF\u532F\u5165\u81F3Minecraft\u7684\u5957\u4EF6"
			}
		}
	},
	"fileDropper": {
		"importFiles": "\u5C07\u6A94\u6848\u62D6\u653E\u5230\u9019\u88E1\u532F\u5165!",
		"importFailed": "bridge.\u7121\u6CD5\u532F\u5165\u4EE5\u4E0B\u6A94\u6848:",
		"andMore": "...\u548C\u66F4\u591A!",
		"importMethod": "\u532F\u5165\u65B9\u6CD5",
		"saveToProject": {
			"title": "\u5132\u5B58\u81F3\u5C08\u6848",
			"description1": "\u5132\u5B58\u6A94\u6848",
			"description2": "\u81F3\u4F60\u7684\u5C08\u6848\u3002"
		},
		"openFile": {
			"title": "\u958B\u555F\u6A94\u6848",
			"description1": "\u958B\u555F\u6A94\u6848",
			"description2": "\u5C07\u8B8A\u66F4\u5132\u5B58\u81F3\u539F\u59CB\u6A94\u6848\u3002"
		}
	},
	"comMojang": {
		"folderDropped": "\u662F\u5426\u5C07\u9019\u500B\u8CC7\u6599\u593E\u8A2D\u70BA\u9810\u8A2D\u7684com.mojang\u8CC7\u6599\u593E?",
		"permissionRequest": "bridge.\u5FC5\u9808\u5B58\u53D6\u4F60\u7684com.mojang\u8CC7\u6599\u593E\u624D\u80FD\u7DE8\u8B6F\u5C08\u6848\u3002"
	},
	"findAndReplace": {
		"name": "\u5C0B\u627E & \u53D6\u4EE3",
		"search": "\u5C0B\u627E",
		"replace": "\u53D6\u4EE3",
		"replaceAll": "\u5168\u90E8\u53D6\u4EE3",
		"noResults": "\u6C92\u6709\u7D50\u679C\u3002",
		"noSearch": "\u8F38\u5165\u6587\u5B57\uFF0C\u9019\u88E1\u5C31\u6703\u986F\u793A\u641C\u5C0B\u7D50\u679C\u3002"
	},
	"preview": {
		"name": "\u9810\u89BD",
		"viewAnimation": "\u6AA2\u8996\u52D5\u756B",
		"viewModel": "\u6AA2\u8996\u6A21\u578B",
		"viewParticle": "\u6AA2\u8996\u7C92\u5B50",
		"viewEntity": "\u6AA2\u8996\u5BE6\u9AD4",
		"viewBlock": "\u6AA2\u8996\u65B9\u584A",
		"failedClientEntityLoad": "\u7121\u6CD5\u8F09\u5165\u9023\u63A5\u7684\u4F7F\u7528\u8005\u7AEF\u5BE6\u9AD4",
		"invalidEntity": "\u5BE6\u9AD4JSON\u7121\u6548\uFF0C\u7121\u6CD5\u958B\u555F\u3002\u8ACB\u4FEE\u6B63\u932F\u8AA4\u5F8C\u518D\u8A66\u4E00\u6B21\u3002",
		"chooseGeometry": "\u9078\u64C7\u5E7E\u4F55\u9AD4",
		"noGeometry": "\u6B64\u6A94\u6848\u4E2D\u672A\u627E\u5230\u6709\u6548\u7684\u5E7E\u4F55\u9AD4\u3002\u8ACB\u6AA2\u67E5JSON\u662F\u5426\u6709\u6548\uFF0C\u6A94\u6848\u7D50\u69CB\u662F\u5426\u6B63\u78BA\uFF0C\u4EE5\u53CA\u542B\u6709\u6307\u5B9A\u7684\u5E7E\u4F55\u9AD4\u8B58\u5225\u7B26\u3002"
	},
	"initialSetup": {
		"welcome": "\u6B61\u8FCE\u4F7F\u7528bridge. v2!",
		"welcomeCaption": "\u4E00\u6B3E\u5F37\u5927\u7684Minecraft Add-On IDE\u3002",
		"step": {
			"installApp": {
				"name": "\u5B89\u88DDbridge.",
				"description": "\u70BA\u6C42\u6700\u4F73\u4F7F\u7528\u9AD4\u9A57\uFF0C\u5C07bridge. v2\u5B89\u88DD\u5230\u96FB\u8166\u3002"
			},
			"bridge": {
				"name": "bridge.\u7684\u8CC7\u6599\u593E",
				"description": "\u8ACB\u65B0\u589E\u4E00\u500B\u8CC7\u6599\u593E\uFF0C\u7528\u65BC\u5B58\u653Ebridge.\u7684\u76F8\u95DC\u8CC7\u6599\u8207Add-On\u5C08\u6848\u3002"
			},
			"comMojang": {
				"name": "com.mojang\u8CC7\u6599\u593E",
				"description": "\u5C07\u60A8\u7684com.mojang\u8CC7\u6599\u593E\u62D6\u66F3\u81F3bridge.\uFF0C\u5C07\u5176\u8207\u5C08\u6848\u8CC7\u6599\u593E\u540C\u6B65\u3002\u9019\u6A23\u53EF\u4EE5\u8B93Windows 10\u7248Minecraft\u76F4\u63A5\u5075\u6E2C\u5230\u4F60\u7684Add-On\u3002\u4E4B\u5F8C\u53EF\u518D\u4FEE\u6539com.mojang\u8CC7\u6599\u593E\u7684\u540C\u6B65\u8A2D\u5B9A\u3002",
				"extraDescription": "\u5C07\u60A8\u7684com.mojang\u8CC7\u6599\u593E\u62D6\u66F3\u81F3bridge..."
			},
			"editorType": {
				"name": "\u9078\u53D6\u7DE8\u8F2F\u5668\u6A21\u5F0F",
				"description": " \u60A8\u60F3\u8981\u5982\u4F55\u7DE8\u8F2FJSON\u6A94\u6848? \u4E4B\u5F8C\u53EF\u518D\u4FEE\u6539\u8A2D\u5B9A\u3002",
				"rawText": {
					"name": "\u7D14\u6587\u672C",
					"description": "\u4EE5\u7D14\u6587\u672C\u6A21\u5F0F\u7DE8\u8F2FJSON\uFF0C\u6709\u5148\u9032\u7684\u81EA\u52D5\u5B8C\u6210\u548CJSON\u5075\u932F\u7CFB\u7D71\uFF0C\u9069\u5408\u4E2D\u968E\u4EE5\u53CA\u9032\u968E\u958B\u767C\u8005\u3002"
				},
				"treeEditor": {
					"name": "\u6A39\u72C0\u7DE8\u8F2F\u5668",
					"description": "\u4EE5\u6A39\u72C0\u6A21\u5F0F\u7DE8\u8F2FJSON\uFF0C\u7121\u9808JSON\u77E5\u8B58\uFF0C\u9069\u5408\u521D\u968E\u4EE5\u53CA\u4E2D\u968E\u958B\u767C\u8005\u3002"
				}
			}
		}
	},
	"editors": {
		"treeEditor": {
			"addObject": "\u52A0\u5165\u7269\u4EF6",
			"addArray": "\u65B0\u589E\u9663\u5217",
			"addValue": "\u65B0\u589E\u5024",
			"edit": "\u7DE8\u8F2F"
		}
	}
}
`;export{t as default};
