import SampleReport from './SampleReport'

export default function SampleOutput() {
  const width = 51
  const labelWidth = 12
  const dataWidth = 32
  const pad = (value, target) => value + ' '.repeat(Math.max(0, target - value.length))
  const center = (value) => {
    const innerWidth = width - 2
    const left = Math.floor((innerWidth - value.length) / 2)
    return `|${' '.repeat(left)}${value}${' '.repeat(innerWidth - left - value.length)}|`
  }
  const row = (label, value) => `| ${pad(label, labelWidth)} | ${pad(value, dataWidth)} |`
  const fullDivider = '+'.repeat(width)
  const sectionDivider = `+${'-'.repeat(labelWidth + 2)}+${'-'.repeat(dataWidth + 2)}+`

  const sampleOutput = [
    fullDivider,
    fullDivider,
    center('QUBETX DEVELOPER TOOLS'),
    center('TR-300 MACHINE REPORT'),
    sectionDivider,
    row('OS', 'macOS 26.3.1'),
    row('CODENAME', 'Tahoe'),
    row('BUILD', '25D2128'),
    row('KERNEL', '25.3.0'),
    row('ARCH', 'arm64'),
    row('MODEL', 'MacBook Pro (Mac14,7)'),
    row('BOOT MODE', 'Normal'),
    row('DESKTOP', 'Aqua'),
    row('SESSION', 'Quartz'),
    row('DISPLAY', '1440x900@60Hz / 2880x1800px'),
    sectionDivider,
    row('HOSTNAME', 'example-mac.local'),
    row('DEFAULT IP', '192.0.2.10'),
    row('SSH CLIENT', 'Not an SSH session'),
    row('DNS  IP 1', '192.0.2.53'),
    row('USER', 'sample'),
    sectionDivider,
    row('PROCESSOR', 'Apple M2'),
    row('CORES', '8 cores / 8 threads'),
    row('CORE TYPE', '4P + 4E'),
    row('GPU', 'Apple M2'),
    row('REPORTED ...', '3.5 GHz'),
    row('CPU USAGE', '######.................... 22.0%'),
    row('LOAD/CPU 1m', '###....................... 10.2%'),
    row('LOAD/CPU 5m', '##........................ 8.7%'),
    row('LOAD/CPU 15m', '##........................ 7.9%'),
    sectionDivider,
    row('VOLUME', '210.00/460.43 GiB [45.61%]'),
    row('DISK USAGE', '############.............. 45.6%'),
    sectionDivider,
    row('MEMORY', '4.75/8.00 GiB [59.4%]'),
    row('AVAILABLE', '3.25 GiB'),
    row('SWAP', '0 B/2.00 GiB [0.0%]'),
    row('USAGE', '###############........... 59.4%'),
    sectionDivider,
    row('LAST LOGIN', 'Tue Jul 14 22:03'),
    row('UPTIME', '3d 14h 22m'),
    row('LOGIN SHELL', 'zsh 5.9'),
    row('TERMINAL', 'Terminal.app'),
    row('LOCALE', 'en_US.UTF-8'),
    row('BATTERY', '80% (Plugged in)'),
    row('BAT HEALTH', 'Good, max 92%, 114 cycles'),
    row('ENCRYPTION', 'FileVault On'),
    sectionDivider,
  ].join('\n')

  return <SampleReport product="TR-300" output={sampleOutput} note="Illustrative report. Actual readings depend on your computer. Normal runs save no file." />
}
