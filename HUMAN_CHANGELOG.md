# Human Changelog

A plain-English companion to [CHANGELOG.md](./CHANGELOG.md). Every change in the technical
changelog has a layman's-terms version here — no version numbers, no file names, no code
references, just what changed and why it matters.

For the technical version with versions, file paths, and release details, see CHANGELOG.md.

---

## July 15, 2026 — The machine-report page now tells the full, accurate story

**Improved**
- Updated the machine-report page to match the release people can download
  today. The command list now makes the important file-saving rule unmistakable:
  normal and automatic startup summaries only appear in the terminal, and a
  file is created only when you deliberately use one of the save commands.
- Replaced the old made-up example with a true-to-life Mac report layout. The
  labels and sections now match what the tool actually prints, including clear
  processor topology, storage, available memory, battery, and encryption facts.
- Added clearer trust and safety information: both kinds of Mac download must
  pass Apple's checks before publishing, and a Windows update blocked by work
  security software stops safely without replacing the copy that already works.
- Refreshed the version badges and feature descriptions so visitors see the
  current generation and understand how the same tool gathers native facts on
  Windows, Mac, and Linux without guessing when information is unavailable.

**Fixed**
- Reworded a Windows download prompt that implied Rust might be installed even
  though every option on the page already downloads a ready-to-run program.
- Brought the site's internal version records back into agreement.

## June 23, 2026 — The Windows install command now works from any window

We changed the one-line install command shown on the Windows tab of every product page so it
starts with `powershell …`. Before, it only worked if you'd already opened a PowerShell window;
now you can paste it almost anywhere on Windows — a regular Command Prompt, the Run box, or a
desktop shortcut — and it still installs correctly, even on computers with stricter security
settings. The Mac and Linux commands are unchanged.

## June 14, 2026 — SD-300 and Shaughv OS temporarily taken out of the spotlight

We're polishing the SD-300 and Shaughv OS pages, so for now we've removed them from the site's
menus, footers, and the cross-links that point to them from other pages — nothing leads
visitors there while the work is in progress. The pages themselves still work if you have the
direct link; they just aren't advertised anywhere on the site. Everything was tagged so it's
easy to put back, and we left ourselves a note to finish and re-launch both pages before
featuring them again.

## June 10, 2026 — WB-300 is back on the menu, and its page tells the new story

The WB-300 page is visible again in the site's navigation and in every page's footer links
(it had been temporarily hidden while the tool was reworked). The page itself now describes
the new WB-300: instead of talking about working folders as the main thing, it shows what
the tool really does now — draw your project's family tree of branches, with each AI agent
on its own branch, the files it's changing live, and a clear stage for every branch (being
edited, saved-but-not-committed, committed, pushed, or finished). It also mentions the new
system notifications (a tap on the shoulder when work lands, ships, or two agents start
touching the same file), the built-in manual, and the clean uninstall command. The download
buttons and version badge already update themselves, so they show the new 2.0 release
automatically.

## June 3, 2026 — Product pages double-checked against the real tools

**Fixed**
- Went through every product page and corrected details that had drifted from the actual tools — version numbers, command lists, feature counts, and download file names — after checking each one against the real source. A few examples: the download guide now shows each tool's current version automatically and lists the exact file names you'll actually find in the folder; the network tool's deep-check count and repair description now match what it really does; the system tool's keyboard shortcuts are complete; and the shaughvOS page no longer overstates what's pre-installed.

## June 2, 2026 — Friendlier release notes + behind-the-scenes tooling

**Added**
- This very file — a plain-English companion to the technical changelog, so anyone can skim what changed without wading through version numbers and file names. From now on the two are kept in step.

**Behind the scenes**
- Added internal tooling that helps our AI coding assistants keep the site accurate: an automatic check that catches code mistakes the moment a file is edited, reminders to keep the project's guidance docs and changelogs in step, and a reviewer that checks each product page against the real tool it describes. None of this changes the website itself.

**Fixed**
- Corrected internal notes that pointed to the wrong folders on Windows, so the assistants can always find each tool's source code no matter which computer they're on.

## May 15, 2026 — One-line installs, the easy way

**Improved**
- Installing any of the three tools (TR-300, ND-300, SD-300) is now a single short copy-paste command on Mac, Linux, or Windows. Behind the scenes it grabs a ready-made program instead of building one on your computer — so there's nothing extra to set up, no developer tools to download, and no admin password needed. The install pages were reworded to match.

**Added**
- Windows users who'd rather click than type now get four double-click installers for TR-300: two that install it for everyone on a shared computer (needs an admin password) and two that install it just for you (no admin needed). They show up as buttons right under the install command.

**Removed**
- Took out an old Windows setup step that downloaded a large bundle of developer "build tools." It's no longer needed now that the program comes ready to run.
- Removed the old "you may need admin / sudo" warnings from the install pages, since the new install runs under your normal account.

## May 11, 2026 — TR-300 sets itself up

**Improved**
- Installing TR-300 now also creates a handy `report` shortcut and makes your system summary appear automatically each time you open a new terminal window — all from the same one-line install. Running it again is safe and won't double anything up.

## May 11, 2026 — Clearer permission hints

**Added**
- Added guidance on each install page about when you'd need elevated permissions — running as administrator on Windows, or adding `sudo` on Mac for non-admin accounts. (These hints were later removed once the install no longer needed them.)

## May 11, 2026 — Right package names, smoother first run

**Fixed**
- Corrected the install commands so they use the right package names, and made the newly installed tools usable immediately in the same terminal window without reopening it.
- Added "already installed? here's how to update" notes with the correct update command for each tool.
- Refreshed the version numbers and file names on the offline-download guide to match the current releases.
- Updated the fallback version labels so the small version badges stay accurate even when the live version lookup is unavailable.

## May 10, 2026 — Internal docs and branch wording

**Behind the scenes**
- Added and refreshed internal notes that help our AI coding assistants work on the site consistently — including a note that "push to main/master" just means the project's default branch.

## May 10, 2026 — Cargo-first installs

**Improved**
- Reworked the install sections so each platform tab gives you one command that handles everything, and removed the now-redundant separate "Cargo" tab. Added short per-platform explanations and update tips.

## April 15, 2026 — shaughvOS marked work-in-progress

**Changed**
- The shaughvOS footer now says "work in progress" instead of "operational," to set expectations honestly.

## April 14, 2026 — Clearer shaughvOS downloads

**Changed**
- Reordered the shaughvOS download options to put the most common choice first (installing on a regular PC, including from a USB stick), and relabeled it so the USB option is obvious.

## April 13, 2026 — shaughvOS page refresh + tidy-ups

**Removed**
- Removed a "+" symbol that appeared when hovering over feature rows — it looked clickable but did nothing.

**Changed**
- Updated the shaughvOS page to match the latest version of the OS: a new description, clearer "for everyday users" vs. "for technicians" sections, and new highlights like trying it live before installing and built-in developer tools.
- Moved the copyright line in every footer to the left.

## April 13, 2026 — Self-update commands and live version badges

**Added**
- Added self-update commands to the TR-300 and ND-300 command lists so people can upgrade themselves.
- The version badges across the site now show the real latest version, pulled live, and footers now show the current year automatically.

**Changed**
- Updated the ND-300 speed-test details to reflect that it now tests against four providers (previously two), and removed a couple of options that no longer exist.

## April 12, 2026 — Live shaughvOS version + footer link

**Added**
- The shaughvOS page now shows its real latest release version, and gained a shaughvOS link in its footer menu.

**Behind the scenes**
- Minor housekeeping to ignore a deployment folder.

## April 12, 2026 — shaughvOS downloads updated

**Changed**
- Updated the shaughvOS downloads to the newer release and, for regular PCs and virtual machines, offered two file formats side by side with clearer labels.

## April 12, 2026 — Mobile and tablet polish

**Fixed**
- Did a full small-screen review and fixed layout problems so every page now displays correctly from small phones up to large desktops.

## April 12, 2026 — shaughvOS gets its own page

**Added**
- Added a brand-new shaughvOS product page — a landing page for the custom operating system, with its own hero, overview, feature list, hardware-compatibility table, and downloads.

## March 12, 2026 — ND-300 page updated

**Changed**
- Updated the ND-300 page to match its newer release: refreshed feature descriptions (speed test, DNS, network recovery) and the sample output.

**Added**
- Added details about SpeedQX, ND-300's standalone speed-test tool.

## February 25, 2026 — Friendlier, plain-English wording

**Improved**
- Rewrote the wording across the TR-300, ND-300, SD-300, and offline-downloads pages to be friendlier and less jargony — describing what each tool does for you in everyday language instead of technical phrasing.

## February 25, 2026 — Navigation and titles cleanup

**Changed**
- Renamed the "Executables" menu item to "Offline," and standardized the browser tab titles to a short "QUBETX <product>" format.
- Made it clearer that the offline downloads are the exact same tools as on GitHub.

**Improved**
- Hid some decorative corner text on small screens to reduce clutter.

## February 25, 2026 — Cosmetic title tweak

**Changed**
- Changed the big title on the offline-downloads page from "EXECUTABLES" to ".EXE."

## February 25, 2026 — Offline downloads hub

**Added**
- Added a new "offline downloads" page where you can grab ready-to-run versions of all the QubeTX tools in one place, with links to each product and to the source code.

## February 22, 2026 — Version sync and clickable scroll links

**Changed**
- Synced the displayed version numbers to the latest releases and turned the "scroll down" prompts on each page into clickable links that jump to the install or documentation sections.

**Added**
- Added TR-300's "fast mode" command to the command list.

## February 15, 2026 — SD-300 page updated

**Changed**
- Updated the SD-300 page to its newer release: corrected keyboard shortcuts, refreshed descriptions, and added a version history with links.

## February 15, 2026 — ND-300 overhaul and heritage badges

**Added**
- Added "heritage" badges on the TR-300 footer that link back to its predecessors (TR-100 and TR-200).

**Changed**
- Updated the ND-300 page to a much newer release with new commands, diagnostics, and sections.

**Fixed**
- Fixed an awkward line break and a small typo in a command option on the ND-300 page.

## February 8, 2026 — ND-300 page and shared navigation

**Added**
- Added the ND-300 product page, a navigation bar that links all the product pages together, and the behind-the-scenes routing that makes those separate pages work.

## February 7, 2026 — SD-300 page

**Added**
- Added the SD-300 product page.

**Behind the scenes**
- Added a rule so every page address loads correctly even when visited directly or refreshed.

## February 6, 2026 — Smooth scrolling and working links

**Improved**
- Added smooth scrolling, and made the previously dead links (documentation, GitHub, license) actually work.

**Added**
- Added more capability highlights to the TR-300 page, with numbered rows.

**Fixed**
- Fixed alignment in the sample-output table and turned non-working text "links" into real links.

## February 3, 2026 — QubeTX rebrand and demo section

**Changed**
- Rebranded the site from "Shaughnessy V" to QubeTX and updated the license references.

**Added**
- Added the commands and sample-output sections plus an ASCII-art demo.

**Fixed**
- Fixed the Windows install command and a horizontal-scroll glitch on mobile.

## February 3, 2026 — First release

**Added**
- The first version of the TR-300 homepage: a hero with an animated logo, a feature grid, a capabilities showcase, a tabbed install section, a quote, and a footer — fully responsive, in the dark theme with the magenta accent.
