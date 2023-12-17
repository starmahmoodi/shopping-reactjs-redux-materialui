export const spaceFinder = (text) =>{
    let textIndex = []
    for (const i in text) {
        if (text[i] === ' ') {
          textIndex.push(i)
        }
    }
    
    const newText = text.slice(0, textIndex[2])
    return newText;
}

