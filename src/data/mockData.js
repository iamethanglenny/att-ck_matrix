export const mockTactics = [
  {
    name: 'Reconnaissance',
    techniques: [
      { name: 'Active Scanning', count: 3 },
      { name: 'Gather Victim Host Information', count: 4 },
      { name: 'Gather Victim Identity Information', count: 3 },
      { name: 'Gather Victim Network Information', count: 6 },
      { name: 'Gather Victim Org Information', count: 4 },
      { name: 'Phishing for Information', count: 4 },
      { name: 'Search Closed Sources', count: 2 },
      { name: 'Search Open Technical Databases', count: 5 },
      { name: 'Search Open Websites/Domains', count: 3 },
      { name: 'Search Victim-Owned Websites', count: 0 },
    ]
  },
  {
    name: 'Resource Development',
    techniques: [
      { name: 'Acquire Access', count: 0 },
      { name: 'Acquire Infrastructure', count: 8 },
      { name: 'Compromise Accounts', count: 3 },
      { name: 'Compromise Infrastructure', count: 8 },
      { name: 'Develop Capabilities', count: 4 },
      { name: 'Establish Accounts', count: 3 },
      { name: 'Obtain Capabilities', count: 7 },
      { name: 'Stage Capabilities', count: 6 },
    ]
  },
  {
    name: 'Initial Access',
    techniques: [
      { name: 'Content Injection', count: 0 },
      { name: 'Drive-by Compromise', count: 0 },
      { name: 'Exploit Public-Facing Application', count: 0 },
      { name: 'External Remote Services', count: 0 },
      { name: 'Hardware Additions', count: 0 },
      { name: 'Phishing', count: 4 },
      { name: 'Replication Through Removable Media', count: 0 },
      { name: 'Supply Chain Compromise', count: 3 },
      { name: 'Trusted Relationship', count: 0 },
      { name: 'Valid Accounts', count: 4 },
    ]
  },
  {
    name: 'Execution',
    techniques: [
      { name: 'Cloud Administration Command', count: 0 },
      { name: 'Command and Scripting Interpreter', count: 11 },
      { name: 'Container Administration Command', count: 0 },
      { name: 'Deploy Container', count: 0 },
      { name: 'Exploitation for Client Execution', count: 0 },
      { name: 'Inter-Process Communication', count: 3 },
      { name: 'Native API', count: 0 },
      { name: 'Scheduled Task/Job', count: 5 },
      { name: 'Serverless Execution', count: 0 },
      { name: 'Shared Modules', count: 0 },
      { name: 'Software Deployment Tools', count: 0 },
      { name: 'System Services', count: 2 },
      { name: 'User Execution', count: 3 },
      { name: 'Windows Management Instrumentation', count: 0 },
    ]
  },
  {
    name: 'Persistence',
    techniques: [
      { name: 'Account Manipulation', count: 7 },
      { name: 'BITS Jobs', count: 0 },
      { name: 'Boot or Logon Autostart Execution', count: 14 },
      { name: 'Boot or Logon Initialization Scripts', count: 5 },
      { name: 'Browser Extensions', count: 0 },
      { name: 'Compromise Host Software Binary', count: 0 },
      { name: 'Create Account', count: 3 },
      { name: 'Create or Modify System Process', count: 5 },
      { name: 'Event Triggered Execution', count: 17 },
      { name: 'External Remote Services', count: 0 },
      { name: 'Hijack Execution Flow', count: 13 },
      { name: 'Implant Internal Image', count: 0 },
      { name: 'Modify Authentication Process', count: 9 },
      { name: 'Office Application Startup', count: 6 },
      { name: 'Power Settings', count: 0 },
      { name: 'Pre-OS Boot', count: 5 },
      { name: 'Scheduled Task/Job', count: 5 },
      { name: 'Server Software Component', count: 5 },
      { name: 'Traffic Signaling', count: 2 },
      { name: 'Valid Accounts', count: 4 },
    ]
  },
  {
    name: 'Privilege Escalation',
    techniques: [
      {
        name: 'Abuse Elevation Control Mechanism', 
        count: 6, 
        id: 'T1548',
        version: '1.1',
        created: 'Dec 31, 2019',
        last_modified: 'Dec 31, 2019',
        tactic: 'Privilege Escalation, Defense Evasion',
        platforms: ['Windows', 'Linux', 'macOS'],
        data_sources: ['File Monitoring', 'Process Monitoring', 'Process Command-Line Parameters'],
        selectedMatches: 42,
        totalMatches: 124,
        hackerGroups: ['Lazarus', 'PlugX', 'Gamaredon'],
        industries: ['Financial Services', 'Defence', 'Government-National'],
        regions: ['Europe', 'Asia', 'North Africa'],
        countries: [
          { name: 'Germany', code: '🇩🇪' },
          { name: 'China', code: '🇨🇳' }, 
          { name: 'Egypt', code: '🇪🇬' },
          { name: 'United Kingdom', code: '🇬🇧' }
        ],
        subTechniques: [],
        executionSamples: [],
        mainDescription: 'Placeholder for main description content...'
      },
      { name: 'Access Token Manipulation', count: 5 },
      { name: 'Account Manipulation', count: 7 },
      { name: 'Boot or Logon Autostart Execution', count: 14 },
      { name: 'Boot or Logon Initialization Scripts', count: 5 },
      { name: 'Create or Modify System Process', count: 5 },
      { name: 'Domain or Tenant Policy Modification', count: 2 },
      { name: 'Escape to Host', count: 0 },
      { name: 'Event Triggered Execution', count: 17 },
      { name: 'Exploitation for Privilege Escalation', count: 0 },
      { name: 'Hijack Execution Flow', count: 13 },
      { name: 'Process Injection', count: 12 },
      { name: 'Scheduled Task/Job', count: 5 },
      { name: 'Valid Accounts', count: 4 },
    ]
  },
  {
    name: 'Defense Evasion',
    techniques: [
      { name: 'Abuse Elevation Control Mechanism', count: 6 },
      { name: 'Access Token Manipulation', count: 5 },
      { name: 'BITS Jobs', count: 0 },
      { name: 'Build Image on Host', count: 0 },
      { name: 'Debugger Evasion', count: 0 },
      { name: 'Deobfuscate/Decode Files or Information', count: 0 },
      { name: 'Deploy Container', count: 0 },
      { name: 'Direct Volume Access', count: 0 },
      { name: 'Domain or Tenant Policy Modification', count: 2 },
      { name: 'Execution Guardrails', count: 2 },
      { name: 'Exploitation for Defense Evasion', count: 0 },
      { name: 'File and Directory Permissions Modification', count: 2 },
      { name: 'Hide Artifacts', count: 12 },
      { name: 'Hijack Execution Flow', count: 13 },
      { name: 'Impair Defenses', count: 11 },
      { name: 'Impersonation', count: 0 },
      { name: 'Indicator Removal', count: 10 },
      { name: 'Indirect Command Execution', count: 0 },
      { name: 'Masquerading', count: 10 },
      { name: 'Modify Authentication Process', count: 9 },
      { name: 'Modify Cloud Compute Infrastructure', count: 5 },
      { name: 'Modify Cloud Resource Hierarchy', count: 0 },
      { name: 'Modify Registry', count: 0 },
      { name: 'Modify System Image', count: 2 },
      { name: 'Network Boundary Bridging', count: 1 },
      { name: 'Obfuscated Files or Information', count: 14 },
      { name: 'Plist File Modification', count: 0 },
      { name: 'Pre-OS Boot', count: 5 },
      { name: 'Process Injection', count: 12 },
      { name: 'Reflective Code Loading', count: 0 },
      { name: 'Rogue Domain Controller', count: 0 },
      { name: 'Rootkit', count: 0 },
      { name: 'Subvert Trust Controls', count: 6 },
      { name: 'System Binary Proxy Execution', count: 14 },
      { name: 'System Script Proxy Execution', count: 2 },
      { name: 'Template Injection', count: 0 },
      { name: 'Traffic Signaling', count: 2 },
      { name: 'Trusted Developer Utilities Proxy Execution', count: 2 },
      { name: 'Unused/Unsupported Cloud Regions', count: 0 },
      { name: 'Use Alternate Authentication Material', count: 4 },
      { name: 'Valid Accounts', count: 4 },
      { name: 'Virtualization/Sandbox Evasion', count: 3 },
      { name: 'Weaken Encryption', count: 2 },
      { name: 'XSL Script Processing', count: 0 },
    ]
  },
  {
    name: 'Credential Access',
    techniques: [
      { name: 'Adversary-in-the-Middle', count: 4 },
      { name: 'Brute Force', count: 4 },
      { name: 'Credentials from Password Stores', count: 6 },
      { name: 'Exploitation for Credential Access', count: 0 },
      { name: 'Forced Authentication', count: 0 },
      { name: 'Forge Web Credentials', count: 2 },
      { name: 'Input Capture', count: 4 },
      { name: 'Modify Authentication Process', count: 9 },
      { name: 'Multi-Factor Authentication Interception', count: 0 },
      { name: 'Multi-Factor Authentication Request Generation', count: 0 },
      { name: 'Network Sniffing', count: 0 },
      { name: 'OS Credential Dumping', count: 8 },
      { name: 'Steal Application Access Token', count: 0 },
      { name: 'Steal or Forge Authentication Certificates', count: 0 },
      { name: 'Steal or Forge Kerberos Tickets', count: 5 },
      { name: 'Steal Web Session Cookie', count: 0 },
      { name: 'Unsecured Credentials', count: 8 },
    ]
  },
  {
    name: 'Discovery',
    techniques: [
      { name: 'Account Discovery', count: 4 },
      { name: 'Application Window Discovery', count: 0 },
      { name: 'Browser Information Discovery', count: 0 },
      { name: 'Cloud Infrastructure Discovery', count: 0 },
      { name: 'Cloud Service Dashboard', count: 0 },
      { name: 'Cloud Service Discovery', count: 0 },
      { name: 'Cloud Storage Object Discovery', count: 0 },
      { name: 'Container and Resource Discovery', count: 0 },
      { name: 'Debugger Evasion', count: 0 },
      { name: 'Device Driver Discovery', count: 0 },
      { name: 'Domain Trust Discovery', count: 0 },
      { name: 'File and Directory Discovery', count: 0 },
      { name: 'Group Policy Discovery', count: 0 },
      { name: 'Log Enumeration', count: 0 },
      { name: 'Network Service Discovery', count: 0 },
      { name: 'Network Share Discovery', count: 0 },
      { name: 'Network Sniffing', count: 0 },
      { name: 'Password Policy Discovery', count: 0 },
      { name: 'Peripheral Device Discovery', count: 0 },
      { name: 'Permission Groups Discovery', count: 3 },
      { name: 'Process Discovery', count: 0 },
      { name: 'Query Registry', count: 0 },
      { name: 'Remote System Discovery', count: 0 },
      { name: 'Software Discovery', count: 1 },
      { name: 'System Information Discovery', count: 0 },
      { name: 'System Location Discovery', count: 1 },
      { name: 'System Network Configuration Discovery', count: 2 },
      { name: 'System Network Connections Discovery', count: 0 },
      { name: 'System Owner/User Discovery', count: 0 },
      { name: 'System Service Discovery', count: 0 },
      { name: 'System Time Discovery', count: 0 },
      { name: 'Virtualization/Sandbox Evasion', count: 3 },
    ]
  },
  {
    name: 'Lateral Movement',
    techniques: [
      { name: 'Exploitation of Remote Services', count: 0 },
      { name: 'Internal Spearphishing', count: 0 },
      { name: 'Lateral Tool Transfer', count: 0 },
      { name: 'Remote Service Session Hijacking', count: 2 },
      { name: 'Remote Services', count: 8 },
      { name: 'Software Deployment Tools', count: 0 },
      { name: 'Taint Shared Content', count: 0 },
      { name: 'Use Alternate Authentication Material', count: 4 },
    ]
  },
  {
    name: 'Collection',
    techniques: [
      { name: 'Adversary-in-the-Middle', count: 4 },
      { name: 'Archive Collected Data', count: 0 },
      { name: 'Audio Capture', count: 0 },
      { name: 'Automated Collection', count: 0 },
      { name: 'Browser Session Hijacking', count: 0 },
      { name: 'Clipboard Data', count: 0 },
      { name: 'Data from Cloud Storage', count: 0 },
      { name: 'Data from Configuration Repository', count: 2 },
      { name: 'Data from Information Repositories', count: 5 },
      { name: 'Data from Local System', count: 0 },
      { name: 'Data from Network Shared Drive', count: 0 },
      { name: 'Data from Removable Media', count: 0 },
      { name: 'Data Staged', count: 2 },
      { name: 'Email Collection', count: 3 },
      { name: 'Input Capture', count: 4 },
      { name: 'Screen Capture', count: 0 },
      { name: 'Video Capture', count: 0 },
    ]
  },
  {
    name: 'Command and Control',
    techniques: [
      { name: 'Application Layer Protocol', count: 5 },
      { name: 'Communication Through Removable Media', count: 0 },
      { name: 'Content Injection', count: 0 },
      { name: 'Data Encoding', count: 2 },
      { name: 'Data Obfuscation', count: 3 },
      { name: 'Dynamic Resolution', count: 3 },
      { name: 'Encrypted Channel', count: 2 },
      { name: 'Fallback Channels', count: 0 },
      { name: 'Hide Infrastructure', count: 0 },
      { name: 'Ingress Tool Transfer', count: 0 },
      { name: 'Multi-Stage Channels', count: 0 },
      { name: 'Non-Application Layer Protocol', count: 0 },
      { name: 'Non-Standard Port', count: 0 },
      { name: 'Protocol Tunneling', count: 0 },
      { name: 'Proxy', count: 4 },
      { name: 'Remote Access Software', count: 0 },
      { name: 'Traffic Signaling', count: 2 },
      { name: 'Web Service', count: 3 },
    ]
  },
  {
    name: 'Exfiltration',
    techniques: [
      { name: 'Automated Exfiltration', count: 1 },
      { name: 'Data Transfer Size Limits', count: 0 },
      { name: 'Exfiltration Over Alternative Protocol', count: 3 },
      { name: 'Exfiltration Over C2 Channel', count: 0 },
      { name: 'Exfiltration Over Other Network Medium', count: 1 },
      { name: 'Exfiltration Over Physical Medium', count: 1 },
      { name: 'Exfiltration Over Web Service', count: 4 },
      { name: 'Scheduled Transfer', count: 0 },
      { name: 'Transfer Data to Cloud Account', count: 0 },
    ]
  },
  {
    name: 'Impact',
    techniques: [
      { name: 'Account Access Removal', count: 0 },
      { name: 'Data Destruction', count: 1 },
      { name: 'Data Encrypted for Impact', count: 0 },
      { name: 'Data Manipulation', count: 3 },
      { name: 'Defacement', count: 2 },
      { name: 'Disk Wipe', count: 2 },
      { name: 'Endpoint Denial of Service', count: 4 },
      { name: 'Financial Theft', count: 0 },
      { name: 'Firmware Corruption', count: 0 },
      { name: 'Inhibit System Recovery', count: 2 },
      { name: 'Network Denial of Service', count: 2 },
      { name: 'Resource Hijacking', count: 4 },
      { name: 'Service Stop', count: 0 },
      { name: 'System Shutdown/Reboot', count: 0 },
    ]
  },
];

export const filterOptions = {
  actors: ['RedCurl', 'SilentCards', 'APT29', 'Oilrig', 'OceanLotus', 'Evil Corp'],
  regions: ['North America', 'Europe', 'Asia', 'Middle East'],
  industries: ['Financial', 'Healthcare', 'Technology', 'Government']
};

export const mobileMockTactics = [
  {
    name: 'Initial Access',
    techniques: [
      { name: 'Application Versioning', count: 0 },
      { name: 'Drive-by Compromise', count: 0 },
      { name: 'Exploitation for Initial Access', count: 0 },
      { name: 'Lockscreen Bypass', count: 0 },
      { name: 'Phishing', count: 0 },
      { name: 'Replication Through Removable Media', count: 0 },
      { name: 'Supply Chain Compromise', count: 3 },
    ],
  },
  {
    name: 'Execution',
    techniques: [
      { name: 'Command and Scripting Interpreter', count: 1 },
      { name: 'Exploitation for Client Execution', count: 0 },
      { name: 'Native API', count: 0 },
      { name: 'Scheduled Task/Job', count: 0 },
    ],
  },
  {
    name: 'Persistence',
    techniques: [
      { name: 'Boot or Logon Initialization Scripts', count: 0 },
      { name: 'Compromise Application Executable', count: 0 },
      { name: 'Compromise Client Software Binary', count: 0 },
      { name: 'Event Triggered Execution', count: 1 },
      { name: 'Foreground Persistence', count: 0 },
      { name: 'Hijack Execution Flow', count: 1 },
      { name: 'Scheduled Task/Job', count: 0 },
    ],
  },
  {
    name: 'Privilege Escalation',
    techniques: [
      { name: 'Abuse Elevation Control Mechanism', count: 1 },
      { name: 'Exploitation for Privilege Escalation', count: 0 },
      { name: 'Process Injection', count: 1 },
    ],
  },
  {
    name: 'Defense Evasion',
    techniques: [
      { name: 'Application Versioning', count: 0 },
      { name: 'Download New Code at Runtime', count: 0 },
      { name: 'Execution Guardrails', count: 1 },
      { name: 'Foreground Persistence', count: 0 },
      { name: 'Hide Artifacts', count: 3 },
      { name: 'Hooking', count: 0 },
      { name: 'Impair Defenses', count: 3 },
      { name: 'Indicator Removal on Host', count: 3 },
      { name: 'Input Injection', count: 0 },
      { name: 'Masquerading', count: 1 },
      { name: 'Native API', count: 0 },
      { name: 'Obfuscated Files or Information', count: 2 },
      { name: 'Process Injection', count: 1 },
      { name: 'Proxy Through Victim', count: 0 },
      { name: 'Subvert Trust Controls', count: 1 },
      { name: 'Virtualization/Sandbox Evasion', count: 1 },
    ],
  },
  {
    name: 'Credential Access',
    techniques: [
      { name: 'Access Notifications', count: 0 },
      { name: 'Clipboard Data', count: 0 },
      { name: 'Credentials from Password Store', count: 1 },
      { name: 'Input Capture', count: 2 },
      { name: 'Steal Application Access Token', count: 1 },
    ],
  },
  {
    name: 'Discovery',
    techniques: [
      { name: 'File and Directory Discovery', count: 0 },
      { name: 'Location Tracking', count: 2 },
      { name: 'Network Service Scanning', count: 0 },
      { name: 'Process Discovery', count: 0 },
      { name: 'Software Discovery', count: 1 },
      { name: 'System Information Discovery', count: 0 },
      { name: 'System Network Configuration Discovery', count: 2 },
      { name: 'System Network Connections Discovery', count: 0 },
    ],
  },
  {
    name: 'Lateral Movement',
    techniques: [
      { name: 'Exploitation of Remote Services', count: 0 },
      { name: 'Replication Through Removable Media', count: 0 },
    ],
  },
  {
    name: 'Collection',
    techniques: [
      { name: 'Access Notifications', count: 0 },
      { name: 'Adversary-in-the-Middle', count: 0 },
      { name: 'Archive Collected Data', count: 0 },
      { name: 'Audio Capture', count: 0 },
      { name: 'Call Control', count: 0 },
      { name: 'Clipboard Data', count: 0 },
      { name: 'Data from Local System', count: 0 },
      { name: 'Input Capture', count: 2 },
      { name: 'Location Tracking', count: 2 },
      { name: 'Protected User Data', count: 4 },
      { name: 'Screen Capture', count: 0 },
      { name: 'Stored Application Data', count: 0 },
      { name: 'Video Capture', count: 0 },
    ],
  },
  {
    name: 'Command and Control',
    techniques: [
      { name: 'Application Layer Protocol', count: 1 },
      { name: 'Call Control', count: 0 },
      { name: 'Dynamic Resolution', count: 1 },
      { name: 'Encrypted Channel', count: 3 },
      { name: 'Ingress Tool Transfer', count: 0 },
      { name: 'Non-Standard Port', count: 0 },
      { name: 'Out of Band Data', count: 0 },
      { name: 'Remote Access Software', count: 0 },
      { name: 'Web Service', count: 3 },
    ],
  },
  {
    name: 'Exfiltration',
    techniques: [
      { name: 'Exfiltration Over Alternative Protocol', count: 1 },
      { name: 'Exfiltration Over C2 Channel', count: 0 },
    ],
  },
  {
    name: 'Impact',
    techniques: [
      { name: 'Account Access Removal', count: 0 },
      { name: 'Call Control', count: 0 },
      { name: 'Data Destruction', count: 0 },
      { name: 'Data Encrypted for Impact', count: 0 },
      { name: 'Data Manipulation', count: 1 },
      { name: 'Endpoint Denial of Service', count: 0 },
      { name: 'Generate Traffic from Victim', count: 0 },
      { name: 'Input Injection', count: 0 },
      { name: 'Network Denial of Service', count: 0 },
      { name: 'SMS Control', count: 0 },
    ],
  },
];

export const icsMockTactics = [
  {
    name: 'Initial Access',
    techniques: [
      { name: 'Drive-by Compromise', count: 0 },
      { name: 'Exploit Public-Facing Application', count: 0 },
      { name: 'Exploitation of Remote Services', count: 0 },
      { name: 'External Remote Services', count: 0 },
      { name: 'Internet Accessible Device', count: 0 },
      { name: 'Remote Services', count: 0 },
      { name: 'Replication Through Removable Media', count: 0 },
      { name: 'Rogue Master', count: 0 },
      { name: 'Spearphishing Attachment', count: 0 },
      { name: 'Supply Chain Compromise', count: 0 },
      { name: 'Transient Cyber Asset', count: 0 },
      { name: 'Wireless Compromise', count: 0 },
    ],
  },
  {
    name: 'Execution',
    techniques: [
      { name: 'Autorun Image', count: 0 },
      { name: 'Change Operating Mode', count: 0 },
      { name: 'Command-Line Interface', count: 0 },
      { name: 'Execution through API', count: 0 },
      { name: 'Graphical User Interface', count: 0 },
      { name: 'Hooking', count: 0 },
      { name: 'Modify Controller Tasking', count: 0 },
      { name: 'Native API', count: 0 },
      { name: 'Scripting', count: 0 },
      { name: 'User Execution', count: 0 },
    ],
  },
  {
    name: 'Persistence',
    techniques: [
      { name: 'Hardcoded Credentials', count: 0 },
      { name: 'Modify Program', count: 0 },
      { name: 'Module Firmware', count: 0 },
      { name: 'Project File Infection', count: 0 },
      { name: 'System Firmware', count: 0 },
      { name: 'Valid Accounts', count: 0 },
    ],
  },
  {
    name: 'Privilege Escalation',
    techniques: [
      { name: 'Exploitation for Privilege Escalation', count: 0 },
      { name: 'Hooking', count: 0 },
    ],
  },
  {
    name: 'Evasion',
    techniques: [
      { name: 'Change Operating Mode', count: 0 },
      { name: 'Exploitation for Evasion', count: 0 },
      { name: 'Indicator Removal on Host', count: 0 },
      { name: 'Masquerading', count: 0 },
      { name: 'Rootkit', count: 0 },
      { name: 'Spoof Reporting Message', count: 0 },
      { name: 'System Binary Proxy Execution', count: 0 },
    ],
  },
  {
    name: 'Discovery',
    techniques: [
      { name: 'Network Connection Enumeration', count: 0 },
      { name: 'Network Sniffing', count: 0 },
      { name: 'Remote System Discovery', count: 0 },
      { name: 'Remote System Information Discovery', count: 0 },
      { name: 'Wireless Sniffing', count: 0 },
    ],
  },
  {
    name: 'Lateral Movement',
    techniques: [
      { name: 'Default Credentials', count: 0 },
      { name: 'Exploitation of Remote Services', count: 0 },
      { name: 'Hardcoded Credentials', count: 0 },
      { name: 'Lateral Tool Transfer', count: 0 },
      { name: 'Program Download', count: 0 },
      { name: 'Remote Services', count: 0 },
      { name: 'Valid Accounts', count: 0 },
    ],
  },
  {
    name: 'Collection',
    techniques: [
      { name: 'Adversary-in-the-Middle', count: 0 },
      { name: 'Automated Collection', count: 0 },
      { name: 'Data from Information Repositories', count: 0 },
      { name: 'Data from Local System', count: 0 },
      { name: 'Detect Operating Mode', count: 0 },
      { name: 'I/O Image', count: 0 },
      { name: 'Monitor Process State', count: 0 },
      { name: 'Point & Tag Identification', count: 0 },
      { name: 'Program Upload', count: 0 },
      { name: 'Screen Capture', count: 0 },
      { name: 'Wireless Sniffing', count: 0 },
    ],
  },
  {
    name: 'Command and Control',
    techniques: [
      { name: 'Commonly Used Port', count: 0 },
      { name: 'Connection Proxy', count: 0 },
      { name: 'Standard Application Layer Protocol', count: 0 },
    ],
  },
  {
    name: 'Inhibit Response Function',
    techniques: [
      { name: 'Activate Firmware Update Mode', count: 0 },
      { name: 'Alarm Suppression', count: 0 },
      { name: 'Block Command Message', count: 0 },
      { name: 'Block Reporting Message', count: 0 },
      { name: 'Block Serial COM', count: 0 },
      { name: 'Change Credential', count: 0 },
      { name: 'Data Destruction', count: 0 },
      { name: 'Denial of Service', count: 0 },
      { name: 'Device Restart/Shutdown', count: 0 },
      { name: 'Manipulate I/O Image', count: 0 },
      { name: 'Modify Alarm Settings', count: 0 },
      { name: 'Rootkit', count: 0 },
      { name: 'Service Stop', count: 0 },
      { name: 'System Firmware', count: 0 },
    ],
  },
  {
    name: 'Impair Process Control',
    techniques: [
      { name: 'Brute Force I/O', count: 0 },
      { name: 'Modify Parameter', count: 0 },
      { name: 'Module Firmware', count: 0 },
      { name: 'Spoof Reporting Message', count: 0 },
      { name: 'Unauthorized Command Message', count: 0 },
    ],
  },
  {
    name: 'Impact',
    techniques: [
      { name: 'Damage to Property', count: 0 },
      { name: 'Denial of Control', count: 0 },
      { name: 'Denial of View', count: 0 },
      { name: 'Loss of Availability', count: 0 },
      { name: 'Loss of Control', count: 0 },
      { name: 'Loss of Productivity and Revenue', count: 0 },
      { name: 'Loss of Protection', count: 0 },
      { name: 'Loss of Safety', count: 0 },
      { name: 'Loss of View', count: 0 },
      { name: 'Manipulation of Control', count: 0 },
      { name: 'Manipulation of View', count: 0 },
      { name: 'Theft of Operational Information', count: 0 },
    ],
  },
]; 