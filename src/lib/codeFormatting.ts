import prettier from 'prettier/standalone';
import parserBabel from 'prettier/plugins/babel';
import estreeParser from 'prettier/plugins/estree';
import { format as sqlFormatter } from "sql-formatter"

function formatSql(code: string): string {
    return sqlFormatter(code)
}

export async function formatCode(code: string, language: string): Promise<string> {
    let formattedText = code
    switch (language) {
        case 'sql':
            formattedText = formatSql(code)
            break
        case 'javascript':
            formattedText = await prettier.format(code, { semi: false, parser: 'babel', plugins: [parserBabel, estreeParser] }) //for js need to babel
            break
        case 'json':
            formattedText = await prettier.format(code, { semi: false, parser: language, plugins: [parserBabel, estreeParser] })
            break
        default:
            break
    }
    return formattedText
}

