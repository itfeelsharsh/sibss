function generateContentObject(html, elementName = 'span') {
    let element = document.createElement(elementName);
    element.insertAdjacentHTML('beforeend', html)
    return element;
}
window.CookieConsent.init({
    modalMainTextMoreLink: null,
    barTimeout: 1000,
    theme: {
        barColor: '#F2F4FF',
        barTextColor: '#5A86E5',
        barMainButtonColor: '#5A86E5',
        barMainButtonTextColor: '#F2F4FF',
        modalMainButtonColor: '#5A86E5',
        modalMainButtonTextColor: '#F2F4FF',
    },
    language: {
        current: 'en-IN',
        current: 'en-IN',
        locale: {
            'en-IN': {
                barMainText: 'Our website uses cookies that are necessary for you to have the best user experience here.',
                barLinkSetting: 'Manage cookies',
                barBtnAcceptAll: 'Accept Cookies',
                modalMainTitle: 'Cookies Settings',
                modalMainText: generateContentObject(`Cookies are small files, created by your browser, with your navigation data on our pages. They are necessary to identify characteristics and information about the user, in addition to being important for the proper functioning of the page on your computer.
                                                        <br><br>Some of these cookies are responsible for sending, to our servers and external, the information of your browsing activity within our pages, saving, for example, your settings preferences.
                                                        You can choose and manage the choice of these cookies.<br><br>
                                                        <b> We recommend allowing all cookies for the full functioning of our pages.</b>`),
                modalBtnSave: 'Save editions',
                modalBtnAcceptAll: 'Accept all',
                modalAffectedSolutions: generateContentObject('By unchecking this option, you will directly affect <b><u>essential options</b></u>, such as:'),
                learnMore: 'View more',
                on: 'Enable',
                off: 'Disable',
            }
        }
    },
    categories: {
        necessary: {
            needed: true,
            wanted: true,
            checked: true,
            language: {
                locale: {
                    'en-IN': {
                        name: 'Required Cookies',
                        description: 'Necessary cookies are mandatory as they are essential for the website to function. Without them, pages will not present properly and will not function properly.',
                    }
                }
            }
        },
        various: {
            needed: false,
            wanted: false,
            checked: false,
            language: {
                locale: {
                    'en-IN': {
                        name: 'Other Functional Cookies ',
                        description: generateContentObject(`Functional or statistical cookies help the website or third-party services to save what you prefer in your navigation (such as login preferences or features).<br><br>
                        Along with that, we also have information, used to customize advertisements and publications that are displayed to you.<br><br>
                        Analytical cookies help to analyze the performance statistics of our website, helping to improve the browsing experience, for example.`),
                    }
                }
            }
        }
    },
    services: {
        LocalServer-Cookies-Settings-Upload-Hit: {
            category: 'various',
            type: 'localcookie',
            search: 'localcookie',
            language: {
                locale: {
                    'en-IN': {
                        name: 'Local cookies;'
                    }
                }
            }
        },
        Server_Side_Analytics: {
            category: 'various',
            type: 'dynamic-script',
            search: 'analytics',
            cookies: [
                {
                    name: '_gid',
                    domain: `.${window.location.hostname}`
                },
                {
                    name: /^_ga/,
                    domain: `.${window.location.hostname}`
                }
            ],
            language: {
                locale: {
                    'en-IN': {
                        name: 'Google Analytics'
                    }
                }
            }
        },
        Cookie_Services: {
            category: 'various',
            type: 'dynamic-script',
            search: 'dinamize',
            cookies: [
                {
                    name: /^din/,
                    domain: `.${window.location.hostname}`
                }
            ],
            language: {
                locale: {
                    'en-IN': {
                        name: 'Dinamize'    
                    }
                }
            }
        },
        Cookie_Install_Server: {
            category: 'various',
            type: 'dynamic-script',
            search: 'facebook',
            language: {
                locale: {
                    'en-IN': {
                        name: 'Facebook'
                    }
                }
            }
        },
        Random_Cookie: {
            category: "various",
            type: "dynamic-script",
            search: "adsense",
            cookies: [
                {
                    name: "_gcl_au",
                    domain: `.${window.location.hostname}`
                }
            ],
            language: {
                locale: {
                    'en-IN': {
                        name: "Google Adsense"
                    }
                }
            }
        },
        Server_Verification_Cookie: {
            category: "various",
            type: "dynamic-script",
            search: "linkedin",
            language: {
                locale: {
                    'en-IN': {
                        name: "Linkedin"
                    }
                }
            }
        },
    }
});