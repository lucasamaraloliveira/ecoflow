import React from 'react';
import { ArrowLeft, Shield, Eye, Database, Lock, UserCheck, Bell, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors">
            {/* Header */}
            <div className="bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 pt-32 pb-20">
                <div className="container mx-auto px-6">
                    <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                        <span className="font-medium">Voltar ao início</span>
                    </Link>
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center">
                            <Shield className="w-8 h-8 text-slate-900" />
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-extrabold text-white">Privacidade</h1>
                    </div>
                    <p className="text-xl text-slate-300 max-w-2xl">
                        Política de Privacidade e Proteção de Dados Pessoais
                    </p>
                    <p className="text-sm text-slate-400 mt-4">Última atualização: Janeiro de 2026</p>
                </div>
            </div>

            <div className="container mx-auto px-6 py-20">
                <div className="max-w-4xl mx-auto">
                    {/* Introduction */}
                    <div className="prose prose-slate dark:prose-invert max-w-none mb-16">
                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                            A EcoFlow Energia Solar Ltda. está comprometida com a proteção da privacidade e dos dados pessoais
                            de seus clientes, visitantes e parceiros. Esta Política de Privacidade descreve como coletamos,
                            utilizamos, armazenamos e protegemos suas informações pessoais em conformidade com a Lei Geral
                            de Proteção de Dados (LGPD - Lei nº 13.709/2018).
                        </p>
                    </div>

                    {/* Sections */}
                    <div className="space-y-12">
                        {[
                            {
                                icon: <Database className="w-6 h-6" />,
                                title: '1. Dados que Coletamos',
                                content: `Coletamos os seguintes tipos de dados pessoais:
                
• **Dados de Identificação**: Nome completo, CPF/CNPJ, data de nascimento
• **Dados de Contato**: E-mail, telefone, endereço residencial ou comercial
• **Dados de Consumo**: Informações sobre sua conta de energia elétrica
• **Dados Técnicos**: Características do seu imóvel e telhado
• **Dados de Navegação**: IP, cookies, páginas visitadas em nosso site

Todos os dados são coletados com base em seu consentimento expresso ou para execução de contrato.`
                            },
                            {
                                icon: <Eye className="w-6 h-6" />,
                                title: '2. Como Utilizamos seus Dados',
                                content: `Utilizamos seus dados pessoais para:

• Elaborar orçamentos e propostas personalizadas
• Executar o contrato de instalação de sistemas fotovoltaicos
• Fornecer suporte técnico e atendimento ao cliente
• Enviar comunicações sobre produtos, serviços e promoções (com seu consentimento)
• Cumprir obrigações legais e regulatórias
• Melhorar nossos produtos e serviços
• Realizar análises estatísticas (dados anonimizados)`
                            },
                            {
                                icon: <Lock className="w-6 h-6" />,
                                title: '3. Segurança dos Dados',
                                content: `Implementamos medidas técnicas e organizacionais robustas para proteger seus dados:

• Criptografia de dados em trânsito e em repouso (SSL/TLS)
• Controle de acesso restrito a funcionários autorizados
• Monitoramento contínuo de sistemas e aplicações
• Backup regular e plano de recuperação de desastres
• Treinamento periódico de colaboradores em segurança da informação
• Auditorias regulares de segurança`
                            },
                            {
                                icon: <UserCheck className="w-6 h-6" />,
                                title: '4. Seus Direitos',
                                content: `Conforme a LGPD, você tem direito a:

• **Confirmação e Acesso**: Saber se tratamos seus dados e acessá-los
• **Correção**: Solicitar a correção de dados incompletos ou desatualizados
• **Anonimização ou Eliminação**: Requerer anonimização ou exclusão de dados desnecessários
• **Portabilidade**: Receber seus dados em formato estruturado
• **Revogação do Consentimento**: Retirar seu consentimento a qualquer momento
• **Oposição**: Opor-se ao tratamento em determinadas situações

Para exercer seus direitos, entre em contato: privacidade@ecoflow.com.br`
                            },
                            {
                                icon: <Bell className="w-6 h-6" />,
                                title: '5. Cookies e Tecnologias Similares',
                                content: `Nosso site utiliza cookies para:

• Garantir o funcionamento adequado das páginas
• Lembrar suas preferências de navegação
• Analisar o tráfego e comportamento de usuários
• Personalizar conteúdo e anúncios

Você pode gerenciar suas preferências de cookies através das configurações do seu navegador. 
Alguns cookies são essenciais para o funcionamento do site e não podem ser desabilitados.`
                            },
                            {
                                icon: <FileText className="w-6 h-6" />,
                                title: '6. Compartilhamento de Dados',
                                content: `Podemos compartilhar seus dados com:

• **Concessionárias de energia**: Para homologação do sistema fotovoltaico
• **Instituições financeiras**: Para processamento de financiamentos
• **Prestadores de serviços**: Instaladores credenciados e parceiros logísticos
• **Autoridades competentes**: Quando exigido por lei

Todos os terceiros são contratualmente obrigados a proteger seus dados conforme esta política.`
                            },
                        ].map((section, idx) => (
                            <div key={idx} className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400 rounded-xl flex items-center justify-center">
                                        {section.icon}
                                    </div>
                                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{section.title}</h2>
                                </div>
                                <div className="text-slate-600 dark:text-slate-400 leading-relaxed whitespace-pre-line">
                                    {section.content}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Contact DPO */}
                    <div className="mt-16 bg-slate-900 dark:bg-slate-800 rounded-3xl p-8 text-center">
                        <Shield className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                        <h2 className="text-2xl font-bold text-white mb-4">Encarregado de Proteção de Dados (DPO)</h2>
                        <p className="text-slate-400 mb-6">
                            Para dúvidas sobre privacidade ou para exercer seus direitos, entre em contato:
                        </p>
                        <p className="text-yellow-400 font-bold text-lg">privacidade@ecoflow.com.br</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPage;
