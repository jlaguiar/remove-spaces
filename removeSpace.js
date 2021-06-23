//pegar o arquivo 
const files = require('./FileConfig/fileInputOutput')

const nomeEmails = [
    'acesso_pasta.html',
    'assinatura_realizada.html',
    'assinatura_rejeitada.html',
    'convidar_signatario.html',
    'documento_cancelado.html',
    'notificar_adicao_saldo_fornecedor.html',
    'notificar_convite_assinatura_voucher.html',
    'notificar_criacao_fornecedor_voucher.html',
    'notificar_gestor_assinatura.html',
    'notificar_gestor_rejeicao_assinatura.html',
    'notificar_indicacao.html',
    'notificar_signatario_cancelamento.html',
    'notificar_signatario_representante_legal_cancelamento.html',
    'notificar_token_assinatura.html',
    'publicacao_gestor.html',
    'publicacao_signatario.html',
    'terminio_vigencia.html',
    'todas_assinaturas_realizadas.html'
]

nomeEmails.forEach(item => {
    console.log(item)
    let email = files.read(`before-email/${item}`)

    const texto = email.replace(/\s+/g, ' ')

    files.write(item, texto)
});

