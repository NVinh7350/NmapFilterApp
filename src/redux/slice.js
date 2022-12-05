import { createSelector } from "@reduxjs/toolkit"

export const pathSelector = (state) => state.NmapInput.path

export const nmapContentSlector = (state) => state.NmapInput.nmapContent

export const statusReadFileSelector = (state) => state.NmapInput.statusReadFile

export const showHostPortInfomationSelector = createSelector(
    nmapContentSlector, (nmapContent) => {
        if(nmapContent)
        {
            const regexGetPortHost = /(\d{1,5})\/(tcp|udp)[ \t]+open[ \t]+(\S+)[ \t]*(.*)?/g
            var result = nmapContent.match(regexGetPortHost).map(e => {
                const row = e.match(/(\S+)/g)
                const Version = row.filter((ej, i) => {
                    return ej != ej.match(/(\d{1,5})\/(tcp|udp)|open/g)
                }).join(' ')
                return [row[0], row[1], row[2], Version];
            })
            return result
        } else {
            return null;
        }
    }
)

export const showDetailHostPortInfomationSelector = createSelector(
    nmapContentSlector, (nmapContent) => {
        if(nmapContent)
        {
            const regexGetDetailPortHost = /(\d{1,5})\/(tcp|udp)[ \t]+open[ \t]+(\S+)[ \t]*(.*)?(^\|+[^\n]+$)/gims;
            var result = nmapContent.match(regexGetDetailPortHost)
            return result
        } else {
            return null;
        }
    }
)

export const showDetailHostSelector = createSelector(
    nmapContentSlector, (nmapContent) => {
        if(nmapContent)
        {
            const result = {
                host : nmapContent.match(/^Nmap scan report for (.)*/gim),
                HostStatus : {
                    State : (nmapContent.match(/^Host is (\w*)/gim)),
                    OpenPorts:nmapContent.match(/(\d{1,5})\/(tcp|udp)[ \t]+open[ \t]+(\S+)[ \t]*(.*)?/g).length,
                    FilteredPorts: 0,
                    ScannedPorts:(nmapContent.match(/(.*)total ports\)$/gim)[0].match(/\((.*)total ports\)$/gim))[0].match(/[0-9](.*)[0-9]/gim)
                },
                Addresses : {
                    IPv4: nmapContent.match(/^Nmap scan report for (.)*/gim)[0].match(/[0-9]+(.*)+[0-9]/gim),
                    IPv6: 'Not available',
                    MAC: 'Not available'
                },
                OperatingSystem: {
                    Device_Type: nmapContent.match(/^Device Type (.)*/gim),
                    OS_CPE : nmapContent.match(/^OS CPE(.)*/m),
                    Aggressive_OS_guesses: nmapContent.match(/^Aggerressive (.)*/gim),
                    Uptime_guess:  nmapContent.match(/^Uptime (.)*/gim),
                    Network_Distance: nmapContent.match(/^Network (.)*/gim),
                    TCP_Sequence_Prediction: nmapContent.match(/^TCP Sequence(.)*/gim),
                    IP_ID_Sequence_Generation: nmapContent.match(/^IP ID (.)*/gim)
                },
                RunningTime : nmapContent.match(/^TRACEROUTE (.)*/gim),
            }
            return result;
            try {
                const os = nmapContent.match(/Running+((.*|\n*)*)/gim)
            } catch (error) {
                
            }

        } else {
            return null;
        }
    }
)

export const showRunningTimeSelector = createSelector(
    nmapContentSlector, (nmapContent) => {
        if(nmapContent)
        {
            const regexRunningTime = /^\d+ +[^\n]+(\d)$/gims;
            var result = nmapContent.match(regexRunningTime).map(e => {
                const row = e.match(/(\S+)/g)
                return [row[0], row[1].concat(' '+row[2]), row[3]]
            })
            return result;
        } else {
            return null;
        }
    }
)