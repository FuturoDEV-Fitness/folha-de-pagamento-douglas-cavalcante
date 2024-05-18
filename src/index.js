const readline = require('readline')
const PdfDocument  = require('pdfkit')
const fs = require('fs')

const input = readline.createInterface(
    process.stdin,
    process.stdout
);

input.question("Nome do funcionário ?", (nomeDigitado) => {
    const doc = new PdfDocument()
    doc.pipe(fs.createWriteStream(`${nomeDigitado}.pdf`))

    doc.fontSize(16)

    doc.text("Folha de pagamento")
    doc.text(`Funcionario: ${nomeDigitado}`)
    doc.end()
})


