/**
 * @returns {string}
 */
export function DomainLockTemplate (): string {
    return `
        const {domainLockFunctionName} = {callControllerFunctionName}(this, function () {
            
            {globalVariableTemplate}
            
            const regExp = new RegExp("[{diff}]", "g");
            const domains = "{domains}".replace(regExp, "").split(";");
            let document;
            let domain;
            let location;
            let hostname;
            let createElement;
            let head;
            let appendChild;
            let setInterval;

            const isName = function(name, length, cs) {
                if (name.length != length) {
                    return false;
                }

                for (let i = 0; i < length; i++) {
                    for (let j = 0; j < cs.length; j += 2) {
                        if (i == cs[j] && name.charCodeAt(i) != cs[j+1]) {
                            return false;
                        }
                    }
                }

                return true;
            };

            for (let d in that) {
                if (isName(d, 8, [7, 116, 5, 101, 3, 117, 0, 100])) {
                    document = d;
                
                    break;
                }
            }

            for (let d1 in that[document]) {
                if (isName(d1, 6, [5, 110, 0, 100])) {
                    domain = d1;
                    
                    break;
                }
            }

            if (!("~" > domain)) {
                for (let d2 in that[document]) {
                    if (isName(d2, 8, [7, 110, 0, 108])) {
                        location = d2;
                        
                        break;
                    }
                }

                for (let d3 in that[document][location]) {
                    if (isName(d3, 8, [7, 101, 0, 104])) {
                        hostname = d3;
                        
                        break;
                    }
                }
            }
            
            if (!document || !that[document]) {
                return;
            }
            
            const documentDomain = that[document][domain];
            const documentLocationHostName = !!that[document][location] && that[document][location][hostname];
            const currentDomain = documentDomain || documentLocationHostName;
          
            if (!currentDomain) {
                return;
            }
          
            let ok = false;
                        
            for (let i = 0; i < domains.length; i++) {
                const domain = domains[i];
                const domainNormalized = domain[0] === String.fromCharCode(46)
                    ? domain.slice(1)
                    : domain;
                const position = currentDomain.length - domainNormalized.length;
                const lastIndex = currentDomain.indexOf(domainNormalized, position);
                const endsWith = lastIndex !== -1 && lastIndex === position;
                
                if (endsWith) {
                    if (currentDomain.length == domain.length || domain.indexOf(".") === 0) {
                        ok = true;
                    }
                }
            }
               
            if (!ok) {
                for (let d4 in that[document]) {
                    if (isName(d4, 13, [6, 69, 0, 99])) {
                        createElement = d4;

                        break;
                    }
                }

                for (let d5 in that[document]) {
                    if (isName(d5, 4, [3, 100, 0, 104])) {
                        head = d5;

                        break;
                    }
                }

                for (let d6 in that[document][head]) {
                    if (isName(d6, 11, [7, 104, 0, 97])) {
                        appendChild = d6;

                        break;
                    }
                }

                for (let d7 in that) {
                    if (isName(d7, 11, [4, 110, 0, 115, 7, 114])) {
                        setInterval = d7;

                        break;
                    }
                }

                if (!setInterval || that[setInterval]) {
                    return;
                }

                that[setInterval](function () {
                    let s = that[document][createElement]('script');
                    s['innerHTML'] = 'Array.prototype.push=function(p){p.push(p)}';
                    that[document][head][appendChild](s);
                }, 2000);
            }
        });

        {domainLockFunctionName}();
    `;
}
