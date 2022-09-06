const elements = {
    // Global side
    allSideSlider: document.querySelector('#allSideSlider'),
    // Input Rangers
    topLeft: document.querySelector('#topLeftSlider'),
    topRight: document.querySelector('#topRightSlider'),
    bottomLeft: document.querySelector('#bottomLeftSlider'),
    bottomRight: document.querySelector('#bottomRightSlider'),
    // Box
    previewBox: document.querySelector('#box'),
    // Slider Class
    sliders: document.querySelectorAll('.slider'),
    // Controls
    cssCode: document.querySelector('#css-code'),
    copyCode: document.querySelector('#copy-style'),
    reset: document.querySelector('#reset'),
    randomRadius: document.querySelector('#random-radius')
}

// Set Border-Radius
elements.sliders.forEach(slider => {

    if (slider.id == 'allSideSlider') {
        slider.addEventListener('input', () => {
            elements.topLeft.value = allSideSlider.value
            elements.topRight.value = allSideSlider.value
            elements.bottomLeft.value = allSideSlider.value
            elements.bottomRight.value = allSideSlider.value
        })
    }

    slider.addEventListener('input', () => {
        elements.previewBox.style.borderTopLeftRadius = elements.topLeft.value + '%'
        elements.previewBox.style.borderTopRightRadius = elements.topRight.value + '%'
        elements.previewBox.style.borderBottomLeftRadius = elements.bottomLeft.value + '%'
        elements.previewBox.style.borderBottomRightRadius = elements.bottomRight.value + '%'

        elements.cssCode.textContent = `border-radius: ${elements.topLeft.value}% ${elements.topRight.value}% ${elements.bottomLeft.value}% ${elements.bottomRight.value}%`
    })
})

// Copy
elements.copyCode.addEventListener('click', () => {
    let copy_code = elements.cssCode

    copy_code.select()
    copy_code.setSelectionRange(0, 10000)

    navigator.clipboard.writeText(copy_code.value)
})


// Reset
elements.reset.addEventListener('click', () => {
    elements.topLeft.value = 0
    elements.topRight.value = 0
    elements.bottomLeft.value = 0
    elements.bottomRight.value = 0

    elements.previewBox.style.borderRadius = '0px'
    elements.cssCode.textContent = `border-radius: ${elements.topLeft.value}% ${elements.topRight.value}% ${elements.bottomLeft.value}% ${elements.bottomRight.value}%`
})

elements.randomRadius.addEventListener('click', () => {
    let returnSome = Math.floor(Math.random() * 101)
    elements.topLeft.value = Math.floor(Math.random() * 101)
    elements.topRight.value = Math.floor(Math.random() * 101)
    elements.bottomLeft.value = Math.floor(Math.random() * 101)
    elements.bottomRight.value = Math.floor(Math.random() * 101)

    elements.previewBox.style.borderTopLeftRadius = elements.topLeft.value + '%'
    elements.previewBox.style.borderTopRightRadius = elements.topRight.value + '%'
    elements.previewBox.style.borderBottomLeftRadius = elements.bottomLeft.value + '%'
    elements.previewBox.style.borderBottomRightRadius = elements.bottomRight.value + '%'

    elements.cssCode.textContent = `border-radius: ${elements.topLeft.value}% ${elements.topRight.value}% ${elements.bottomLeft.value}% ${elements.bottomRight.value}%`
})