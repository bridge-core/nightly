const t=`{
	"toolbar": {
		"installApp": "Install app",
		"file": {
			"name": "\uD30C\uC77C",
			"newFile": "\uC0C8\uB85C\uC6B4 \uD30C\uC77C",
			"import": {
				"name": "\uD30C\uC77C \uAC00\uC838\uC624\uAE30",
				"openFile": "\uD30C\uC77C \uC5F4\uAE30",
				"importOBJ": "OBJ \uBAA8\uB378 \uAC00\uC838\uC624\uAE30"
			},
			"saveFile": "\uD30C\uC77C \uC800\uC7A5",
			"saveAs": "\uB2E4\uB978 \uC774\uB984\uC73C\uB85C \uC800\uC7A5",
			"saveAll": "\uBAA8\uB450 \uC800\uC7A5",
			"closeEditor": "\uD3B8\uC9D1 \uCC3D \uB2EB\uAE30",
			"clearAllNotifications": "\uC54C\uB9BC \uC804\uBD80 \uC9C0\uC6B0\uAE30",
			"preferences": {
				"name": "\uD658\uACBD \uC124\uC815",
				"settings": "\uC124\uC815",
				"extensions": "\uD50C\uB7EC\uADF8\uC778"
			}
		},
		"edit": {
			"name": "\uD3B8\uC9D1",
			"selection": {
				"name": "\uC120\uD0DD",
				"unselect": "\uC120\uD0DD \uCDE8\uC18C",
				"selectParent": "\uC5B4\uBC84\uC774 \uC120\uD0DD",
				"selectNext": "\uB2E4\uC74C \uC120\uD0DD",
				"selectPrevious": "\uC774\uC804 \uC120\uD0DD"
			},
			"jsonNodes": {
				"name": "JSON \uAC1C\uCCB4",
				"toggleOpen": "\uAC1C\uCCB4 \uC5EC\uB2EB\uAE30",
				"toggleOpenChildren": "\uAC1C\uCCB4 \uC790\uC2DD \uC5EC\uB2EB\uAE30",
				"moveDown": "\uC544\uB798\uB85C \uC774\uB3D9",
				"moveUp": "\uC704\uB85C \uC774\uB3D9",
				"commentUncomment": "\uD65C\uC131\uD654/\uBE44\uD65C\uC131\uD654"
			},
			"delete": "\uC0AD\uC81C",
			"undo": "\uC2E4\uD589 \uCDE8\uC18C",
			"redo": "\uC7AC\uC2E4\uD589",
			"copy": "\uBCF5\uC0AC",
			"cut": "\uC790\uB974\uAE30",
			"paste": "\uBD99\uC5EC\uB123\uAE30",
			"alternativePaste": "\uB2E4\uB978 \uBD99\uC5EC\uB123\uAE30"
		},
		"tools": {
			"name": "\uB3C4\uAD6C",
			"docs": "\uC815\uBCF4 \uAE30\uB85D\uBB38",
			"presets": "\uD504\uB9AC\uC14B",
			"snippets": "\uBD80\uBD84\uC801 \uC778\uC6A9",
			"goToFile": "\uD30C\uC77C\uB85C \uC774\uB3D9"
		},
		"help": {
			"name": "\uB3C4\uC6C0\uB9D0",
			"about": "\uC815\uBCF4",
			"releases": "\uCD5C\uC2E0 \uB9B4\uB9AC\uC2A4",
			"bugReports": "\uBC84\uADF8 \uC81C\uBCF4",
			"pluginAPI": "\uD50C\uB7EC\uADF8\uC778 API",
			"gettingStarted": "bridge. \uC2DC\uC791\uD558\uB294 \uBC95",
			"faq": "FAQ"
		},
		"dev": {
			"name": "\uAC1C\uBC1C\uC790 \uC635\uC158",
			"reloadBrowserWindow": "\uBE0C\uB77C\uC6B0\uC800 \uCC3D \uC7AC\uC2E4\uD589",
			"reloadEditorData": "\uD3B8\uC9D1 \uB370\uC774\uD130 \uC7AC\uC2E4\uD589",
			"developerTools": "\uAC1C\uBC1C\uC790 \uB3C4\uAD6C"
		}
	},
	"sidebar": {
		"explorer": { "name": "\uC775\uC2A4\uD50C\uB85C\uB7EC" },
		"vanillaPacks": { "name": "\uBC14\uB2D0\uB77C \uD329" },
		"debugLog": { "name": "\uB514\uBC84\uADF8 \uB85C\uADF8" },
		"extensions": {
			"name": "\uD504\uB85C\uADF8\uB7A8 \uD655\uC7A5",
			"intro": {
				"description": "bridge.\uB97C \uD50C\uB7EC\uADF8\uC778\uC744 \uD1B5\uD574 \uCEE4\uC2A4\uD130\uB9C8\uC774\uC988 \uD574\uBCF4\uC138\uC694!!",
				"themes": "\uD14C\uB9C8",
				"snippets": "\uBD80\uBD84\uC801 \uC778\uC6A9",
				"presets": "\uD504\uB9AC\uC14B",
				"uiElements": "UI \uC694\uC18C",
				"andMore": "\uADF8\uB9AC\uACE0 \uB354 \uB9CE\uC2B5\uB2C8\uB2E4!!",
				"viewExtensions": "\uD504\uB85C\uADF8\uB7A8 \uD655\uC7A5\uB4E4 \uBCF4\uAE30"
			}
		}
	},
	"welcome": {
		"title": "bridge.",
		"subtitle": "\uB9C8\uC778\uD06C\uB798\uD504\uD2B8 \uC560\uB4DC\uC628\uC744 \uB9CC\uB4E4\uAE30 \uB354\uC6B1 \uC27D\uAC8C!!",
		"syntaxHighlighting": "Syntax \uD558\uC774\uB77C\uC774\uD2B8 \uAE30\uB2A5",
		"richAutoCompletions": "\uB2E4\uC591\uD55C \uC790\uB3D9\uC644\uC131 \uAE30\uB2A5",
		"projectManagement": "\uC26C\uC6B4 \uC791\uC5C5 \uAD00\uB9AC",
		"customSyntax": "\uCEE4\uC2A4\uD140 \uC560\uB4DC\uC628 syntax",
		"customComponents": "\uCEE4\uC2A4\uD140 \uC694\uC18C",
		"customCommands": "\uCEE4\uC2A4\uD140 \uCEE4\uB9E8\uB4DC",
		"plugins": "\uD50C\uB7EC\uADF8\uC778\uC744 \uD1B5\uD574 \uD504\uB85C\uADF8\uB7A8 \uCEE4\uC2A4\uD140 \uAC00\uB2A5"
	},
	"windows": {
		"common": {
			"confirm": { "title": "\uD655\uC778" },
			"dropdown": { "confirm": "\uD655\uC778" },
			"information": { "confirm": "\uC608" },
			"input": { "confirm": "\uD655\uC778" }
		},
		"discord": {
			"content": "bridge.\uC758 \uACF5\uC2DD \uB514\uC2A4\uCF54\uB4DC \uC11C\uBC84\uC5D0 \uB4E4\uC5B4\uC624\uC138\uC694!!",
			"join": "\uB4E4\uC5B4\uAC00\uAE30",
			"later": "\uB098\uC911\uC5D0"
		},
		"selectFolder": {
			"title": "\uD3F4\uB354 \uC120\uD0DD",
			"content": "\uD504\uB85C\uC81D\uD2B8 \uC800\uC7A5 \uC704\uCE58\uB97C \uC120\uD0DD\uD558\uAC70\uB098 \uC774\uBBF8 \uC874\uC7AC\uD558\uB294 \uB514\uB809\uD1A0\uB9AC\uB97C \uC120\uD0DD\uD558\uC138\uC694.",
			"select": "\uC120\uD0DD!!"
		},
		"projectFolder": {
			"title": "\uD504\uB85C\uC81D\uD2B8 \uD3F4\uB354",
			"content": "bridge.\uAC00 \uC81C\uB300\uB85C \uC791\uB3D9\uD558\uAE30 \uC704\uD574\uC11C\uB294 \uD504\uB85C\uC81D\uD2B8 \uD3F4\uB354\uC5D0 \uB300\uD55C \uC811\uADFC \uAD8C\uD55C\uC774 \uD544\uC694\uD569\uB2C8\uB2E4."
		},
		"managePlugin": { "name": "\uD50C\uB7EC\uADF8\uC778 \uAD00\uB9AC", "done": "\uC644\uB8CC" }
	}
}
`;export{t as default};
