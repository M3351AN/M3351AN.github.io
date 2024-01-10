/**
 * Custom Terminal Commands
 * -----------------------------
 * In this file, define custom commands for your terminal application.
 * This will overwrite any built-in system commands if they exist.
 */
var customCommands = {};
var devicestatus = 'bricked';
var used_magiskboot = false;
var android_version = '16';
var api_version = '66';
var kernel_version = '7.40.911-android20-9-xxxx-xxxx';

/**
 * Base64 encodes a string.
*/
builtInCommands.base64enc = {
    about: "base64enc [string]<br>&nbsp;&nbsp;Base64 encode a string.",
    hidden: true,
    exe: function (args) {
        if (args.length == 1) {
            return "No string specified.";
        }
        args.shift();
        return btoa(args.join(" "));
    }
}

/**
 * Base64 decodes a string.
*/
builtInCommands.base64dec = {
    about: "base64dec [string]<br>&nbsp;&nbsp;Base64 decode a string.",
    hidden: true,
    exe: function (args) {
        if (args.length == 1) {
            return "No string specified.";
        }
        args.shift();
        return atob(args.join(" "));
    }
}

/**
 * Print a simple message.
 **/
customCommands.cow = {
    about: "cow<br>&nbsp;&nbsp;What does a cow say?",     // Help text for this command.
    exe: function () {                                     // Executed for this command.
        return "Moooooo!";
    }
};

/**
 * Prints a greeting to the user or to the given name.
 **/
customCommands.hello = {
    about: "hello [name ...]<br>&nbsp;&nbsp;Greet the user with a message.",
    exe: function (args) {                          // Executed for this command. args[0] contains the command name.
        if (args.length < 2) {
            return "Hello. Why don't you tell me your name?";
        }
        var name = "";
        for (var i = 1; i < args.length; i++) {
            name += args[i] + " ";
        }
        return "Hello " + name.trim();
    }
};

/**
 * Print certain system information.
 **/
customCommands.uname = {
    about: "Usage: uname [OPTION]...<br>Please enter '--help' to get it.",
    exe: function (args) {
        var information = "";
        if (args[1] && args[1] == "-a") {
            information += "Linux arch 6.1.9-arch1-2 #1 SMP PREEMPT_DYNAMIC Fri, 03 Feb 2023 18:49:53 +0000<br>x86_64 GNU/Linux";
        } else if (args[1] && args[1] == "-s") {
            information += "Linux";
        } else if (args[1] && args[1] == "-n") {
            information += "arch";
        } else if (args[1] && args[1] == "-r") {
            information += "6.1.9-arch1-2";
        } else if (args[1] && args[1] == "-v") {
            information += "#1 SMP PREEMPT_DYNAMIC Fri, 03 Feb 2023 18:49:53 +0000";
        } else if (args[1] && args[1] == "-m") {
            information += "x86_64";
        } else if (args[1] && args[1] == "-p") {
            information += "unknown";
        } else if (args[1] && args[1] == "-i") {
            information += "unknown";
        } else if (args[1] && args[1] == "-o") {
            information += "GNU/Linux";
        } else if (args[1] && args[1] == "--help") {
            information += "Usage: uname [OPTION]...";
            information += "<br>Print certain system information.  With no OPTION, same as -s.";
            information += "<br><br>&nbsp;&nbsp;-a (all)";
            information += "<br>&nbsp;&nbsp;-s (kernel-name)";
            information += "<br>&nbsp;&nbsp;-n (nodename)";
            information += "<br>&nbsp;&nbsp;-r (kernel-release)";
            information += "<br>&nbsp;&nbsp;-v (kernel-version)";
            information += "<br>&nbsp;&nbsp;-m (machine)";
            information += "<br>&nbsp;&nbsp;-p (processor)";
            information += "<br>&nbsp;&nbsp;-i (hardware-platform)";
            information += "<br>&nbsp;&nbsp;-o (operating-system)";
            information += "<br>&nbsp;&nbsp;&nbsp;&nbsp;--help";
            information += "<br>&nbsp;&nbsp;&nbsp;&nbsp;--version";
        } else if (args[1] && args[1] == "--version") {
            information += "uname (GNU coreutils) 9.1<br>Copyright (C) 2022 Free Software Foundation, Inc.";
            information += "<br>License GPLv3+: GNU GPL version 3 or later <https://gnu.org/licenses/gpl.html>.";
            information += "<br>This is free software: you are free to change and redistribute it.";
            information += "<br>There is NO WARRANTY, to the extent permitted by law.";
            information += "<br><br>Written by David MacKenzie.";
        } else if (!args[1]) {
            information += "Linux";
        } else {
            information += "uname: No such option.";
        }
        return information;
    }
}

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) { return pair[1]; }
    }
    return "aW52YWxpZCByZXF1ZXN0";
}

/**
 * Get Device Status
 **/
customCommands.status ={
    about: "Get device statu",
    exe: function () {
        var information = "";
        information += "Device status:&nbsp;&nbsp;&nbsp;&nbsp;" + devicestatus;
        information += "<br>Android Version:&nbsp;&nbsp;" + android_version;
        information += "<br>API Version:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + api_version;
        information += "<br>Kernel Version:&nbsp;&nbsp;&nbsp;" + kernel_version;
        return information;
    }
}

/**
 * Fastboot
 **/
customCommands.fastboot = {
    about: "fastboot -h",
    exe: function (args) {
        var information = "";
        var result = "";
        if (args[1] && args[1] == "flash") {
            if (args[2] && args[2] == "boot") {
                if (args[3]) {
                    var result = term.catFile(args[3]);
                }
                if ((devicestatus === 'bootloader' || devicestatus === 'fastbootd') && used_magiskboot == true) {
                    if (args[3] && args[3] == "boot-official.img" && result != false) {
                        information += "Sending 'boot_a' (196608 KB)&nbsp;&nbsp;&nbsp;&nbsp;OKAY [  4.848s]";
                        information += "<br>Writing 'boot_a'&nbsp;&nbsp;&nbsp;&nbsp;OKAY [  0.314s]";
                        information += "<br>Finished. Total time: 5.312s<br>Nothing happened.";
                    } else if (args[3] && args[3] == "kernel-WSA-arm64-5.10.117.2-20220906.zip" && result != false) {
                        information += "fastboot: Can not flash this file."
                    } else if (args[3] && args[3] == "kernel-WSA-x86_64-5.10.117.2-20220906.zip" && result != false) {
                        information += "fastboot: Can not flash this file."
                    } else if (args[3] && args[3] == "ksu-10672-Image-android12-5.10.136_2022-11-boot-gz.img" && result != false) {
                        information += "Sending 'boot_a' (196608 KB)&nbsp;&nbsp;&nbsp;&nbsp;OKAY [  4.848s]";
                        information += "<br>Writing 'boot_a'&nbsp;&nbsp;&nbsp;&nbsp;OKAY [  0.314s]";
                        information += "<br>Finished. Total time: 5.312s";
                        information += "<br>Congratulations!!Your device has become a brick!";
                        information += "<br>Please continue to finish exam.";
                    } else if (args[3] && args[3] == "ksu-10672-Image-android12-5.10.136_2022-11-boot-lz4.img" && result != false) {
                        information += "Sending 'boot_a' (196608 KB)&nbsp;&nbsp;&nbsp;&nbsp;OKAY [  4.848s]";
                        information += "<br>Writing 'boot_a'&nbsp;&nbsp;&nbsp;&nbsp;OKAY [  0.314s]";
                        information += "<br>Finished. Total time: 5.312s";
                        information += "<br>Congratulations!!Your device has become a brick!";
                        information += "<br>Please continue to finish exam.";
                    } else if (args[3] && args[3] == "ksu-10672-Image-android12-5.10.136_2022-11-boot.img" && result != false) {
                        information += "Sending 'boot_a' (196608 KB)&nbsp;&nbsp;&nbsp;&nbsp;OKAY [  4.848s]";
                        information += "<br>Writing 'boot_a'&nbsp;&nbsp;&nbsp;&nbsp;OKAY [  0.314s]";
                        information += "<br>Finished. Total time: 5.312s";
                        information += "<br>Congratulations!!You have successfully completed this exam.";
                        information += "<br>The Group Password:&nbsp;&nbsp;" + Tea.decrypt(getQueryVariable("pwd"), 20221209);
                    } else if (args[3] && args[3] == "ksu-10672-Image-android13-5.10.107_2022-05-boot-gz.img" && result != false) {
                        information += "Sending 'boot_a' (196608 KB)&nbsp;&nbsp;&nbsp;&nbsp;OKAY [  4.848s]";
                        information += "<br>Writing 'boot_a'&nbsp;&nbsp;&nbsp;&nbsp;OKAY [  0.314s]";
                        information += "<br>Finished. Total time: 5.312s";
                        information += "<br>Congratulations!!Your device has become a brick!";
                        information += "<br>Please continue to finish exam.";
                    } else if (args[3] && args[3] == "ksu-10672-Image-android13-5.10.107_2022-05-boot-lz4.img" && result != false) {
                        information += "Sending 'boot_a' (196608 KB)&nbsp;&nbsp;&nbsp;&nbsp;OKAY [  4.848s]";
                        information += "<br>Writing 'boot_a'&nbsp;&nbsp;&nbsp;&nbsp;OKAY [  0.314s]";
                        information += "<br>Finished. Total time: 5.312s";
                        information += "<br>Congratulations!!Your device has become a brick!";
                        information += "<br>Please continue to finish exam.";
                    } else if (args[3] && args[3] == "ksu-10672-Image-android13-5.10.107_2022-05-boot.img" && result != false) {
                        information += "Sending 'boot_a' (196608 KB)&nbsp;&nbsp;&nbsp;&nbsp;OKAY [  4.848s]";
                        information += "<br>Writing 'boot_a'&nbsp;&nbsp;&nbsp;&nbsp;OKAY [  0.314s]";
                        information += "<br>Finished. Total time: 5.312s";
                        information += "<br>Congratulations!!Your device has become a brick!";
                        information += "<br>Please continue to finish exam.";
                    } else if (args[3] && args[3] == "ksu-10672-Image-android13-5.10.149_2022-05-boot-gz.img" && result != false) {
                        information += "Sending 'boot_a' (196608 KB)&nbsp;&nbsp;&nbsp;&nbsp;OKAY [  4.848s]";
                        information += "<br>Writing 'boot_a'&nbsp;&nbsp;&nbsp;&nbsp;OKAY [  0.314s]";
                        information += "<br>Finished. Total time: 5.312s";
                        information += "<br>Congratulations!!Your device has become a brick!";
                        information += "<br>Please continue to finish exam.";
                    } else if (args[3] && args[3] == "ksu-10672-Image-android13-5.10.149_2022-05-boot-lz4.img" && result != false) {
                        information += "Sending 'boot_a' (196608 KB)&nbsp;&nbsp;&nbsp;&nbsp;OKAY [  4.848s]";
                        information += "<br>Writing 'boot_a'&nbsp;&nbsp;&nbsp;&nbsp;OKAY [  0.314s]";
                        information += "<br>Finished. Total time: 5.312s";
                        information += "<br>Congratulations!!Your device has become a brick!";
                        information += "<br>Please continue to finish exam.";
                    } else if (args[3] && args[3] == "ksu-10672-Image-android13-5.10.149_2022-05-boot.img" && result != false) {
                        information += "Sending 'boot_a' (196608 KB)&nbsp;&nbsp;&nbsp;&nbsp;OKAY [  4.848s]";
                        information += "<br>Writing 'boot_a'&nbsp;&nbsp;&nbsp;&nbsp;OKAY [  0.314s]";
                        information += "<br>Finished. Total time: 5.312s";
                        information += "<br>Congratulations!!Your device has become a brick!";
                        information += "<br>Please continue to finish exam.";
                    } else if (!args[3]) {
                        information += "fastboot: flash: Please choose a file which you need to flash.";
                    } else {
                        information += "fastboot: error: No such file or directory.";
                    }
                } else if ((devicestatus === 'bootloader' || devicestatus === 'fastbootd') && used_magiskboot != true) {
                    information += "You have not got the compression format of your original boot by magiskboot.";
                } else {
                    information += "fastboot: No connected devices found.";
                }
            } else if (!args[2]) {
                information += "fastboot: flash: Please choose the partition which you need to flash.<br>(Just need to flash boot.)";
            } else {
                information += "fastboot: flash: Needn't flash this partition.";
            }
        } else if (args[1] && args[1] == "devices") {
            if (devicestatus === 'bootloader') {
                information += "a9d45561&nbsp;&nbsp;&nbsp;&nbsp;fastboot<br>&nbsp;";
            } else if (devicestatus === 'fastbootd') {
                information += "a9d45561&nbsp;&nbsp;&nbsp;&nbsp;fastbootd<br>&nbsp;";
            } else {
                information += "&nbsp;";
            }
        } else if (args[1] && args[1] == "-h") {
            information += "usage: fastboot [OPTION...] COMMAND...<br><br>&nbsp;flash PARTITION [FILENAME]<br>&nbsp;devices<br>&nbsp;-h<br>&nbsp;reboot [bootloader/fastboot/recovery]";
        } else if (args[1] && args[1] == "reboot") {
            if (!args[2]) {
                if (devicestatus === 'system') {
                    information += "fastboot: No connected devices found.";
                } else if (devicestatus === 'recovery') {
                    information += "fastboot: No connected devices found.";
                } else if (devicestatus === 'bootloader') {
                    information += "Rebooting";
                    information += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OKAY [  0.001s]";
                    information += "<br>Finished. Total time: 0.051s";
                    devicestatus = 'system';
                } else if (devicestatus === 'fastbootd') {
                    information += "Rebooting";
                    information += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OKAY [  0.001s]";
                    information += "<br>Finished. Total time: 0.051s";
                    devicestatus = 'system'; 
                }
            } else if (args[2] && args[2] == "bootloader") {
                if (devicestatus === 'system') {
                    information += "fastboot: No connected devices found.";
                } else if (devicestatus === 'recovery') {
                    information += "fastboot: No connected devices found.";
                } else if (devicestatus === 'bootloader') {
                    information += "Rebooting";
                    information += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OKAY [  0.001s]";
                    information += "<br>Finished. Total time: 0.051s";
                    devicestatus = 'bootloader';
                } else if (devicestatus === 'fastbootd') {
                    information += "Rebooting";
                    information += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OKAY [  0.001s]";
                    information += "<br>Finished. Total time: 0.051s";
                    devicestatus = 'bootloader'; 
                }  
            } else if (args[2] && args[2] == "fastboot") {
                if (devicestatus === 'system') {
                    information += "fastboot: No connected devices found.";
                } else if (devicestatus === 'recovery') {
                    information += "fastboot: No connected devices found.";
                } else if (devicestatus === 'bootloader') {
                    information += "Rebooting";
                    information += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OKAY [  0.001s]";
                    information += "<br>Finished. Total time: 0.051s";
                    devicestatus = 'fastbootd';
                } else if (devicestatus === 'fastbootd') {
                    information += "Rebooting";
                    information += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OKAY [  0.001s]";
                    information += "<br>Finished. Total time: 0.051s";
                    devicestatus = 'fastbootd'; 
                }
            } else if (args[2] && args[2] == "recovery") {
                if (devicestatus === 'system') {
                    information += "fastboot: No connected devices found.";
                } else if (devicestatus === 'recovery') {
                    information += "fastboot: No connected devices found.";
                } else if (devicestatus === 'bootloader') {
                    information += "Rebooting";
                    information += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OKAY [  0.001s]";
                    information += "<br>Finished. Total time: 0.051s";
                    devicestatus = 'recovery';
                } else if (devicestatus === 'fastbootd') {
                    information += "Rebooting";
                    information += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OKAY [  0.001s]";
                    information += "<br>Finished. Total time: 0.051s";
                    devicestatus = 'recovery';
                }
            } else {
                information += "fastboot: usage: no command";
            }
        } else {
            information += "fastboot: usage: no command";
        }
        return information;
    }
}

/**
 * adb
 **/
customCommands.adb = {
    about: "adb --help",
    exe: function (args) {
        var information = "";
        if (args[1] && args[1] == "devices") {
            if (devicestatus === 'system') {
                information += "a9d45561&nbsp;&nbsp;&nbsp;&nbsp;device<br>&nbsp;";
            } else if (devicestatus === 'recovery') {
                information += "a9d45561&nbsp;&nbsp;&nbsp;&nbsp;recovery<br>&nbsp;";
            } else {
                information += "&nbsp;";
            }
        } else if (args[1] && args[1] == "--help") {
            information += "usage: adb [OPTION...] COMMAND...<br><br>&nbsp;reboot [bootloader/fastboot/recovery]<br>&nbsp;devices<br>&nbsp;--help";
        } else if (args[1] && args[1] == "reboot") {
            if (!args[2]) {
                if (devicestatus === 'bootloader') {
                    information += "adb: No connected devices found.";
                } else if (devicestatus === 'fastbootd') {
                    information += "adb: No connected devices found.";
                } else if (devicestatus === 'system') {
                    information += "Rebooting";
                    information += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OKAY [  0.001s]";
                    information += "<br>Finished. Total time: 0.051s";
                    devicestatus = 'system';
                } else if (devicestatus === 'recovery') {
                    information += "Rebooting";
                    information += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OKAY [  0.001s]";
                    information += "<br>Finished. Total time: 0.051s";
                    devicestatus = 'system'; 
                }
            } else if (args[2] && args[2] == "bootloader") {
                if (devicestatus === 'bootloader') {
                    information += "adb: No connected devices found.";
                } else if (devicestatus === 'fastbootd') {
                    information += "adb: No connected devices found.";
                } else if (devicestatus === 'system') {
                    information += "Rebooting";
                    information += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OKAY [  0.001s]";
                    information += "<br>Finished. Total time: 0.051s";
                    devicestatus = 'bootloader';
                } else if (devicestatus === 'recovery') {
                    information += "Rebooting";
                    information += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OKAY [  0.001s]";
                    information += "<br>Finished. Total time: 0.051s";
                    devicestatus = 'bootloader'; 
                }  
            } else if (args[2] && args[2] == "fastboot") {
                if (devicestatus === 'bootloader') {
                    information += "adb: No connected devices found.";
                } else if (devicestatus === 'fastbootd') {
                    information += "adb: No connected devices found.";
                } else if (devicestatus === 'system') {
                    information += "Rebooting";
                    information += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OKAY [  0.001s]";
                    information += "<br>Finished. Total time: 0.051s";
                    devicestatus = 'fastbootd';
                } else if (devicestatus === 'recovery') {
                    information += "Rebooting";
                    information += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OKAY [  0.001s]";
                    information += "<br>Finished. Total time: 0.051s";
                    devicestatus = 'fastbootd'; 
                }
            } else if (args[2] && args[2] == "recovery") {
                if (devicestatus === 'bootloader') {
                    information += "adb: No connected devices found.";
                } else if (devicestatus === 'fastbootd') {
                    information += "adb: No connected devices found.";
                } else if (devicestatus === 'system') {
                    information += "Rebooting";
                    information += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OKAY [  0.001s]";
                    information += "<br>Finished. Total time: 0.051s";
                    devicestatus = 'recovery';
                } else if (devicestatus === 'recovery') {
                    information += "Rebooting";
                    information += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OKAY [  0.001s]";
                    information += "<br>Finished. Total time: 0.051s";
                    devicestatus = 'recovery';
                }
            } else {
                information += "adb: usage: no command";
            }
        } else {
            information += "adb: usage: no command";
        }
        return information;
    }
}

/**
 * magiskboot
 **/
customCommands.magiskboot = {
    about: "usage: magiskboot [action] [args...]",
    exe: function (args) {
        var information = "";
        var result = "";
        if (args[1] && args[1] == "unpack") {
            if (args[2]) {
                var result = term.catFile(args[2]);
            }
            if (args[2] && args[2] == "boot-official.img" && result != false) {
                information += "Parsing boot image: [boot-official.img]";
                information += "<br>HEADER_VER&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[4]";
                information += "<br>KERNEL_SZ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[37532988]";
                information += "<br>RAMDISK_SZ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[1380084]";
                information += "<br>OS_VERSION&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[12.0.0]";
                information += "<br>OS_PATCH_LEVEL&nbsp;&nbsp;[2022-11]";
                information += "<br>PAGESIZE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[4096]";
                information += "<br>CMDLINE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[]";
                information += "<br>KERNEL_FMT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[raw]";
                information += "<br>RAMDISK_FMT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[lz4_legacy]";
                information += "<br>VBMETA";
                used_magiskboot = true;
            } else if (args[2] && args[2] == "kernel-WSA-arm64-5.10.117.2-20220906.zip" && result != false) {
                information += "magiskboot: Could not unpack this file.";
            } else if (args[2] && args[2] == "kernel-WSA-x86_64-5.10.117.2-20220906.zip" && result != false) {
                information += "magiskboot: Could not unpack this file.";
            } else if (args[2] && args[2] == "ksu-10672-Image-android12-5.10.136_2022-11-boot-gz.img" && result != false) {
                information += "Parsing boot image: [ksu-10672-Image-android12-5.10.136_2022-11-boot-gz.img]";
                information += "<br>HEADER_VER&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[4]";
                information += "<br>KERNEL_SZ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[15981831]";
                information += "<br>RAMDISK_SZ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[1380084]";
                information += "<br>OS_VERSION&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[12.0.0]";
                information += "<br>OS_PATCH_LEVEL&nbsp;&nbsp;[2022-11]";
                information += "<br>PAGESIZE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[4096]";
                information += "<br>CMDLINE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[]";
                information += "<br>KERNEL_FMT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[gzip]";
                information += "<br>RAMDISK_FMT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[lz4_legacy]";
                information += "<br>VBMETA";
            } else if (args[2] && args[2] == "ksu-10672-Image-android12-5.10.136_2022-11-boot-lz4.img" && result != false) {
                information += "Parsing boot image: [ksu-10672-Image-android12-5.10.136_2022-11-boot-lz4.img]";
                information += "<br>HEADER_VER&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[4]";
                information += "<br>KERNEL_SZ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[18284481]";
                information += "<br>RAMDISK_SZ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[1380084]";
                information += "<br>OS_VERSION&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[12.0.0]";
                information += "<br>OS_PATCH_LEVEL&nbsp;&nbsp;[2022-11]";
                information += "<br>PAGESIZE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[4096]";
                information += "<br>CMDLINE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[]";
                information += "<br>KERNEL_FMT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[lz4_lg]";
                information += "<br>RAMDISK_FMT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[lz4_legacy]";
                information += "<br>VBMETA";
            } else if (args[2] && args[2] == "ksu-10672-Image-android12-5.10.136_2022-11-boot.img" && result != false) {
                information += "Parsing boot image: [ksu-10672-Image-android12-5.10.136_2022-11-boot.img]";
                information += "<br>HEADER_VER&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[4]";
                information += "<br>KERNEL_SZ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[37532988]";
                information += "<br>RAMDISK_SZ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[1380084]";
                information += "<br>OS_VERSION&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[12.0.0]";
                information += "<br>OS_PATCH_LEVEL&nbsp;&nbsp;[2022-11]";
                information += "<br>PAGESIZE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[4096]";
                information += "<br>CMDLINE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[]";
                information += "<br>KERNEL_FMT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[raw]";
                information += "<br>RAMDISK_FMT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[lz4_legacy]";
                information += "<br>VBMETA";
            } else if (args[2] && args[2] == "ksu-10672-Image-android13-5.10.107_2022-05-boot-gz.img" && result != false) {
                information += "Parsing boot image: [ksu-10672-Image-android13-5.10.107_2022-05-boot-gz.img]";
                information += "<br>HEADER_VER&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[4]";
                information += "<br>KERNEL_SZ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[18243334]";
                information += "<br>RAMDISK_SZ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[0]";
                information += "<br>PAGESIZE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[4096]";
                information += "<br>CMDLINE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[]";
                information += "<br>KERNEL_FMT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[gzip]";
                information += "<br>VBMETA";
            } else if (args[2] && args[2] == "ksu-10672-Image-android13-5.10.107_2022-05-boot-lz4.img" && result != false) {
                information += "Parsing boot image: [ksu-10672-Image-android13-5.10.107_2022-05-boot-lz4.img]";
                information += "<br>HEADER_VER&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[4]";
                information += "<br>KERNEL_SZ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[21036992]";
                information += "<br>RAMDISK_SZ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[0]";
                information += "<br>PAGESIZE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[4096]";
                information += "<br>CMDLINE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[]";
                information += "<br>KERNEL_FMT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[lz4_legacy]";
                information += "<br>VBMETA";
            } else if (args[2] && args[2] == "ksu-10672-Image-android13-5.10.107_2022-05-boot.img" && result != false) {
                information += "Parsing boot image: [ksu-10672-Image-android13-5.10.107_2022-05-boot.img]";
                information += "<br>HEADER_VER&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[4]";
                information += "<br>KERNEL_SZ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[43387204]";
                information += "<br>RAMDISK_SZ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[0]";
                information += "<br>PAGESIZE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[4096]";
                information += "<br>CMDLINE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[]";
                information += "<br>KERNEL_FMT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[raw]";
                information += "<br>VBMETA";
            } else if (args[2] && args[2] == "ksu-10672-Image-android13-5.10.149_2022-05-boot-gz.img" && result != false) {
                information += "Parsing boot image: [ksu-10672-Image-android13-5.10.149_2022-05-boot-gz.img]";
                information += "<br>HEADER_VER&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[4]";
                information += "<br>KERNEL_SZ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[18335488]";
                information += "<br>RAMDISK_SZ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[0]";
                information += "<br>PAGESIZE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[4096]";
                information += "<br>CMDLINE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[]";
                information += "<br>KERNEL_FMT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[gzip]";
                information += "<br>VBMETA";
            } else if (args[2] && args[2] == "ksu-10672-Image-android13-5.10.149_2022-05-boot-lz4.img" && result != false) {
                information += "Parsing boot image: [ksu-10672-Image-android13-5.10.149_2022-05-boot-lz4.img]";
                information += "<br>HEADER_VER&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[4]";
                information += "<br>KERNEL_SZ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[21158760]";
                information += "<br>RAMDISK_SZ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[0]";
                information += "<br>PAGESIZE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[4096]";
                information += "<br>CMDLINE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[]";
                information += "<br>KERNEL_FMT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[lz4_legacy]";
                information += "<br>VBMETA";
            } else if (args[2] && args[2] == "ksu-10672-Image-android13-5.10.149_2022-05-boot.img" && result != false) {
                information += "Parsing boot image: [ksu-10672-Image-android13-5.10.149_2022-05-boot.img]";
                information += "<br>HEADER_VER&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[4]";
                information += "<br>KERNEL_SZ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[43518276]";
                information += "<br>RAMDISK_SZ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[0]";
                information += "<br>PAGESIZE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[4096]";
                information += "<br>CMDLINE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[]";
                information += "<br>KERNEL_FMT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[raw]";
                information += "<br>VBMETA";
            } else if (!args[2]) {
                information += "magiskboot: Please choose file which you need to unpack.";
            } else {
                information += "magiskboot: No such file or directory.";
            }
        } else if (!args[1] || args[1] == "-h") {
            information += "MagiskBoot - Boot Image Modification Tool";
            information += "<br><br>Usage: ./magiskboot <action> [args...]";
            information += "<br><br>Supported actions:";
            information += "<br>&nbsp;&nbsp;unpack [file]";
            information += "<br>&nbsp;&nbsp;-h";
        } else {
            information += "magiskboot: No such option.";
        }
        return information;
    }
}

/**
 * whoami
 **/
customCommands.whoami = {
    about: "Usage: whoami [OPTION]... Please enter '--help' to get it.",
    exe: function (args) {
        var information = "";
        if (args[1] && args[1] == "--help") {
            information += "Usage: whoami [OPTION]...";
            information += "<br>Print the user name associated with the current effective user ID.";
            information += "<br>Same as id -un.";
            information += "<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--help&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;display this help and exit";
            information += "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--version&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;output version information and exit";
            information += "<br><br>GNU coreutils online help: (https://www.gnu.org/software/coreutils/)";
            information += "<br>Report any translation bugs to (https://translationproject.org/team/)";
            information += "<br>Full documentation (https://www.gnu.org/software/coreutils/whoami)";
            information += "<br>or available locally via: info '(coreutils) whoami invocation'";
        } else if (args[1] && args[1] == "--version") {
            information += "whoami (GNU coreutils) 9.1<br>Copyright (C) 2022 Free Software Foundation, Inc.";
            information += "<br>License GPLv3+: GNU GPL version 3 or later (https://gnu.org/licenses/gpl.html).";
            information += "<br>This is free software: you are free to change and redistribute it.";
            information += "<br>There is NO WARRANTY, to the extent permitted by law.";
            information += "<br><br>Written by Richard Mlynarik.";
        } else if (!args[1]) {
            information += "root";
        } else {
            information += "whoami: No such options!"
        }
        return information;
    }
}

/**
 * Print a simple message.
 **/
customCommands.secret = {
    about: "secret<br>&nbsp;&nbsp;A command that is not listed in the help.",  // Help text for this command.
    hidden: true,                                                               // Whether to hide this command from the help list.
    exe: function () {                                                          // Executed for this command.
        return "The password is: goldfish";
    }
};

// Use the commands in this file, to extend the built-in commands:
var commands = extendObject(builtInCommands, customCommands);