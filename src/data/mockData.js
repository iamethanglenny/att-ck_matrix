export const mockTactics = [
  {
    name: 'Reconnaissance',
    techniques: [
      {
        name: 'Gather Victim Identity Information',
        id: 'T1589',
        version: '1.1',
        tactic: 'Reconnaissance',
        created: '2020-10-02',
        modified: '2021-04-15',
        description: 'Adversaries may gather information about the victim\'s identity that can be used during targeting. Information about identities may include a variety of details, including personal data (ex: employee names, email addresses, etc.) as well as sensitive details such as credentials.',
        selectedMatches: 42,
        totalMatches: 124,
        dataSources: ['File monitoring', 'Process monitoring', 'Process command-line parameters'],
        platforms: ['Windows', 'Linux', 'macOS'],
        hackerGroups: ['Lazarus', 'APT28', 'Gamaredon', 'Dark Halo', 'Transparent Tribe'],
        industries: [
          'government-national',
          'financial-services',
          'defence',
          'education',
          'government-local'
        ],
        regions: ['Europe', 'Asia', 'Northern America'],
        countries: [
          { name: 'Ukraine', code: 'UA' },
          { name: 'China', code: 'CN' },
          { name: 'United States', code: 'US' },
          { name: 'South Korea', code: 'KR' }
        ],
        mitigations: [
          'Implement network segmentation and restrict access to sensitive information.',
          'Use strong authentication mechanisms and regularly rotate credentials.',
          'Monitor for suspicious network traffic and data exfiltration attempts.'
        ]
      },
      { 
        name: 'Email Addresses',
        count: 1,
        tactic: 'Reconnaissance',
        description: 'Adversaries may gather email addresses that can be used during targeting. Email addresses could be gathered through social media sites or other public data sets.',
        platforms: ['Cloud', 'SaaS']
      },
      { 
        name: 'Phishing for Information',
        count: 0,
        tactic: 'Reconnaissance',
        description: 'Adversaries may send phishing messages to elicit sensitive information that can be used during targeting.',
        platforms: ['Windows', 'Linux', 'macOS', 'Cloud']
      },
      { 
        name: 'Search Victim-Owned Websites',
        count: 1,
        tactic: 'Reconnaissance',
        description: 'Adversaries may search websites owned by the victim organization for information that can be used during targeting.',
        platforms: ['Cloud']
      }
    ]
  },
  {
    name: 'Resource Development',
    techniques: [
      { 
        name: 'Acquire Infrastructure',
        count: 0,
        tactic: 'Resource Development',
        description: 'Adversaries may buy, lease, or rent infrastructure that can be used during targeting.',
        platforms: ['PRE']
      },
      { 
        name: 'Domains',
        count: 2,
        tactic: 'Resource Development',
        description: 'Adversaries may create or acquire domains that can be used during targeting.',
        platforms: ['PRE']
      },
      { 
        name: 'Server',
        count: 1,
        tactic: 'Resource Development',
        description: 'Adversaries may set up servers that can be used during targeting.',
        platforms: ['PRE']
      },
      { 
        name: 'Malware',
        count: 4,
        tactic: 'Resource Development',
        description: 'Adversaries may develop malware that can be used during targeting.',
        platforms: ['PRE']
      }
    ]
  },
  {
    name: 'Initial Access',
    techniques: [
      {
        name: 'Drive-by Compromise',
        id: 'T1189',
        version: '1.1',
        tactic: 'Initial Access',
        created: '2017-05-31',
        modified: '2020-03-15',
        description: 'Adversaries may gain access to a system through a user visiting a website over the normal course of browsing. With this technique, the user\'s web browser is targeted for exploitation.',
        selectedMatches: 17,
        totalMatches: 89,
        dataSources: ['File monitoring', 'Network traffic', 'Packet capture'],
        platforms: ['Windows', 'Linux', 'macOS'],
        hackerGroups: ['APT28', 'FIN7', 'Lazarus'],
        industries: ['financial-services', 'technology', 'defence'],
        regions: ['Global'],
        countries: [
          { name: 'United States', code: 'US' },
          { name: 'South Korea', code: 'KR' },
          { name: 'Japan', code: 'JP' }
        ],
        mitigations: [
          'Use modern browsers with security features enabled',
          'Keep systems and applications updated',
          'Implement network intrusion detection systems'
        ]
      },
      { name: 'Exploit Public-Facing Application', count: 16 },
      { name: 'External Remote Services', count: 7 },
      { name: 'Spearphishing Attachment', count: 181 }
    ]
  },
  {
    name: 'Execution',
    techniques: [
      { name: 'Command and Scripting Interpreter', count: 135 },
      { name: 'PowerShell', count: 69 },
      { name: 'Unix Shell', count: 1 },
      { name: 'Windows Command Shell', count: 10 }
    ]
  },
  {
    name: 'Persistence',
    techniques: [
      { name: 'Account Manipulation', count: 5 },
      { name: 'BITS Jobs', count: 2 },
      { name: 'Boot or Logon Autostart Execution', count: 0 },
      { name: 'Registry Run Keys / Startup Folder', count: 86 }
    ]
  },
  {
    name: 'Privilege Escalation',
    techniques: [
      { name: 'Abuse Elevation Control Mechanism', count: 0 },
      { name: 'Sudo and Sudo Caching', count: 1 },
      { name: 'Access Token Manipulation', count: 4 },
      { name: 'Boot or Logon Autostart Execution', count: 0 }
    ]
  },
  {
    name: 'Defense Evasion',
    techniques: [
      {
        name: 'Deobfuscate/Decode Files or Information',
        id: 'T1140',
        version: '1.1',
        tactic: 'Defense Evasion',
        created: '2017-12-14',
        modified: '2020-07-09',
        description: 'Adversaries may use [Obfuscated Files or Information](https://attack.mitre.org/techniques/T1027) to hide artifacts of an intrusion from analysis. They may require separate mechanisms to decode or deobfuscate that information depending on how they intend to use it. Methods for doing that include built-in functionality of malware or by using utilities present on the system.',
        selectedMatches: 42,
        totalMatches: 124,
        dataSources: ['File monitoring', 'Process monitoring', 'Process command-line parameters'],
        platforms: ['Windows', 'Linux', 'macOS'],
        hackerGroups: ['Lazarus', 'PlugX', 'Gamaredon', 'APT28', 'Dark Halo', 'Transparent Tribe', 'FIN7', 'Oilrig', 'Higaisa', 'APT10'],
        industries: [
          'government-national',
          'financial-services',
          'defence',
          'education',
          'government-local',
          'law-and-government',
          'government-regional',
          'heavy-industry-and-engineering',
          'aerospace-and-defense',
          'hospitality-leisure',
          'manufacturing'
        ],
        regions: ['Europe', 'Asia', 'Northern America', 'European Union'],
        countries: [
          { name: 'Ukraine', code: 'UA' },
          { name: 'China', code: 'CN' },
          { name: 'United States', code: 'US' },
          { name: 'South Korea', code: 'KR' },
          { name: 'United Kingdom', code: 'GB' },
          { name: 'Japan', code: 'JP' },
          { name: 'Russia', code: 'RU' },
          { name: 'India', code: 'IN' },
          { name: 'Germany', code: 'DE' },
          { name: 'France', code: 'FR' }
        ],
        mitigations: [
          'Monitor file creation and modification events, particularly for known deobfuscation techniques.',
          'Implement application control policies to prevent execution of unauthorized deobfuscation tools.',
          'Use anti-malware solutions that can detect and prevent common deobfuscation techniques.'
        ]
      }
    ]
  },
  {
    name: 'Credential Access',
    techniques: [
      { name: 'Brute Force', count: 8 },
      { name: 'Exploitation for Credential Access', count: 7 },
      { name: 'Input Capture', count: 64 },
      { name: 'OS Credential Dumping', count: 55 }
    ]
  },
  {
    name: 'Discovery',
    techniques: [
      { name: 'Account Discovery', count: 33 },
      { name: 'Application Window Discovery', count: 25 },
      { name: 'Browser Bookmark Discovery', count: 3 },
      { name: 'Domain Trust Discovery', count: 2 }
    ]
  },
  {
    name: 'Lateral Movement',
    techniques: [
      { name: 'Exploitation of Remote Services', count: 25 },
      { name: 'Remote Services', count: 15 },
      { name: 'Remote Desktop Protocol', count: 8 },
      { name: 'SSH', count: 5 }
    ]
  }
];

export const filterOptions = {
  actors: ['RedCurl', 'SilentCards', 'APT29', 'Oilrig', 'OceanLotus', 'Evil Corp'],
  regions: ['North America', 'Europe', 'Asia', 'Middle East'],
  industries: ['Financial', 'Healthcare', 'Technology', 'Government']
}; 