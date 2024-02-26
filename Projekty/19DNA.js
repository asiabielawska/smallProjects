function transcription (code) {
    const tabmRNA = []
    for (let s = 0; s < code.length; s++){
        if (code[s] === "A"){
            tabmRNA.push("U")
        } else if  (code[s] === "T"){
            tabmRNA.push("A")
        } else if  (code[s] === "C"){
            tabmRNA.push("G")
        } else if  (code[s] === "G"){
            tabmRNA.push("C")
        }
    }
    return tabmRNA.join("")
}
const mRNA = transcription ("TACTGAATGTTTGGG")
console.log(mRNA)

const splitToThree = (tab) => {
    let tabWithThree = []
    for (let t = 0; t < tab.length; t = t+3) {
        tabWithThree.push(tab.slice(t, t+3))
    }
    return tabWithThree
} 
const toThree = splitToThree (mRNA)
console.log(toThree)

const translation = (mRNAToThree) => {
    const tabProtein = []
    for (let p = 0; p < mRNAToThree.length; p++){
        if (mRNAToThree[p] === "AUG") {
            tabProtein.push("Met")
            for (; p < mRNAToThree.length; p++){
                if (mRNAToThree[p] === "UUU" || mRNAToThree[p] === "UUC"){
                tabProtein.push("Phe")
                } else if (mRNAToThree[p] === "UUA" || mRNAToThree[p] === "UUG" || mRNAToThree[p] === "CUU" || mRNAToThree[p] === "CUC" || mRNAToThree[p] === "CUA" || mRNAToThree[p] === "CUG"){
                tabProtein.push("Leu")
                } else if (mRNAToThree[p] === "AUU" || mRNAToThree[p] === "AUC" || mRNAToThree[p] === "AUA"){
                tabProtein.push("Ile")
                } else if (mRNAToThree[p] === "GUU" || mRNAToThree[p] === "GUC" || mRNAToThree[p] === "GUA" || mRNAToThree[p] === "GUG"){
                tabProtein.push("Val")
                } else if (mRNAToThree[p] === "UCU" || mRNAToThree[p] === "UCC" || mRNAToThree[p] === "UCA" || mRNAToThree[p] === "UCG" || mRNAToThree[p] === "AGU" || mRNAToThree[p] === "AGC"){
                tabProtein.push("Ser")
                } else if (mRNAToThree[p] === "CCU" || mRNAToThree[p] === "CCC" || mRNAToThree[p] === "CCA" || mRNAToThree[p] === "CCG"){
                tabProtein.push("Pro")
                } else if (mRNAToThree[p] === "ACU" || mRNAToThree[p] === "ACC" || mRNAToThree[p] === "ACA" || mRNAToThree[p] === "ACG"){
                tabProtein.push("Thr")
                } else if (mRNAToThree[p] === "GCU" || mRNAToThree[p] === "GCC" || mRNAToThree[p] === "GCA" || mRNAToThree[p] === "GCG"){
                tabProtein.push("Ala")
                } else if (mRNAToThree[p] === "UAU" || mRNAToThree[p] === "UAC"){
                tabProtein.push("Tyr")
                } else if (mRNAToThree[p] === "CAU" || mRNAToThree[p] === "CAC"){
                tabProtein.push("His")
                } else if (mRNAToThree[p] === "CAA" || mRNAToThree[p] === "CAG"){
                tabProtein.push("Gln")
                } else if (mRNAToThree[p] === "AAU" || mRNAToThree[p] === "AAC"){
                tabProtein.push("Asn")
                } else if (mRNAToThree[p] === "AAA" || mRNAToThree[p] === "AAG"){
                tabProtein.push("Lys")
                } else if (mRNAToThree[p] === "GAU" || mRNAToThree[p] === "GAC"){
                tabProtein.push("Asp")
                } else if (mRNAToThree[p] === "GAA" || mRNAToThree[p] === "GAG"){
                tabProtein.push("Glu")
                } else if (mRNAToThree[p] === "UGU" || mRNAToThree[p] === "UGC"){
                tabProtein.push("Cys")
                } else if (mRNAToThree[p] === "UGG"){
                tabProtein.push("Trp")
                } else if (mRNAToThree[p] === "CGU" || mRNAToThree[p] === "CGC" || mRNAToThree[p] === "CGA" || mRNAToThree[p] === "CGG" || mRNAToThree[p] === "AGA" || mRNAToThree[p] === "AGG"){
                tabProtein.push("Arg")
                } else if (mRNAToThree[p] === "GGU" || mRNAToThree[p] === "GGC" || mRNAToThree[p] === "GGA" || mRNAToThree[p] === "GGG"){
                tabProtein.push("Gly")
                } else if (mRNAToThree[p] === "UAA" || mRNAToThree[p] === "UAG" || mRNAToThree[p] === "UGA" ) {
                    return tabProtein.join("")
                }
            }  
        }
    }
    return tabProtein.join("")
}
const protein = translation (toThree)
console.log(protein) 