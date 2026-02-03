import { Calculator, FileCheck, Users, Clock, Award, Phone, Mail, FileText, CircleCheck, MessageCircle } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-50">
      {/* Header/Hero Section */}
      <header className="relative bg-gradient-to-r from-slate-600 to-slate-700 text-white overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1763729805496-b5dbf7f00c79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWduaW5nJTIwZG9jdW1lbnQlMjBvZmZpY2lhbHxlbnwxfHx8fDE3NjYxNTU0MDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Posse em Cargo Público"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-800/85 to-slate-700/75"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Award className="w-5 h-5" />
              <span className="text-sm">Especialista em Servidores Públicos</span>
            </div>
            <h1 className="text-4xl sm:text-5xl mb-6">
              Serviços Contábeis e Assessoria Documental
            </h1>
            <p className="text-xl mb-8 text-slate-100">
              Assessoria completa para recém aprovados em concursos públicos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contato"
                className="bg-white text-slate-600 px-8 py-3 rounded-lg hover:bg-slate-50 transition-colors text-center"
              >
                Solicitar Orçamento
              </a>
              <a
                href="#servicos"
                className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors text-center"
              >
                Conhecer Serviços
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Benefícios Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl mb-4 text-gray-900">
              Por que escolher meus serviços?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Entendemos as necessidades de quem está iniciando no serviço público
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="mb-3 text-gray-900">Agilidade</h3>
              <p className="text-gray-600">
                Processos rápidos para você não perder prazos importantes
              </p>
            </div>

            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileCheck className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="mb-3 text-gray-900">Precisão</h3>
              <p className="text-gray-600">
                Documentação correta e completa desde a primeira vez
              </p>
            </div>

            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="mb-3 text-gray-900">Experiência</h3>
              <p className="text-gray-600">
                Anos de experiência com processos de posse e documentação
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl mb-4 text-gray-900">
              Meus Serviços
            </h2>
            <p className="text-xl text-gray-600">
              Suporte completo em todas as etapas da sua posse
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl mb-3 text-gray-900">Emissão de Documentos</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CircleCheck className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Declarações de imposto de renda</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CircleCheck className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Certidões negativas (Federal, Estadual, Municipal)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CircleCheck className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Declarações de bens e valores</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CircleCheck className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Comprovantes de renda</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calculator className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl mb-3 text-gray-900">Assessoria Contábil</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CircleCheck className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Regularização de pendências fiscais</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CircleCheck className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Orientação sobre obrigações tributárias</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CircleCheck className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Planejamento tributário</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CircleCheck className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Suporte na declaração de posse</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileCheck className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl mb-3 text-gray-900">Documentação para Posse</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CircleCheck className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Checklist completo de documentos necessários</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CircleCheck className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Acompanhamento de prazos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CircleCheck className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Revisão de toda documentação</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CircleCheck className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Orientação sobre procedimentos</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl mb-3 text-gray-900">Consultoria Personalizada</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CircleCheck className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Atendimento individualizado</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CircleCheck className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Esclarecimento de dúvidas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CircleCheck className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Suporte durante todo o processo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CircleCheck className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Atendimento presencial ou remoto</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl mb-4 text-gray-900">
              Como Funciona
            </h2>
            <p className="text-xl text-gray-600">
              Processo simples em 4 passos
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                1
              </div>
              <h3 className="mb-2 text-gray-900">Contato Inicial</h3>
              <p className="text-gray-600 text-sm">
                Entre em contato para agendar uma consulta
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-slate-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                2
              </div>
              <h3 className="mb-2 text-gray-900">Análise</h3>
              <p className="text-gray-600 text-sm">
                Avaliamos sua situação e documentação necessária
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-slate-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                3
              </div>
              <h3 className="mb-2 text-gray-900">Execução</h3>
              <p className="text-gray-600 text-sm">
                Emitimos e organizamos todos os documentos
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-slate-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                4
              </div>
              <h3 className="mb-2 text-gray-900">Entrega</h3>
              <p className="text-gray-600 text-sm">
                Você recebe tudo pronto para sua posse
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-slate-600 to-slate-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl mb-6">
            Pronto para sua posse sem complicações?
          </h2>
          <p className="text-xl mb-8 text-slate-100">
            Não deixe a burocracia atrapalhar o início da sua carreira como servidor público
          </p>
          <a
            href="#contato"
            className="inline-block bg-white text-slate-600 px-8 py-4 rounded-lg hover:bg-slate-50 transition-colors"
          >
            Agende uma Consulta Gratuita
          </a>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl mb-4 text-gray-900">
              Entre em Contato
            </h2>
            <p className="text-xl text-gray-600">
              Tire suas dúvidas e solicite um orçamento sem compromisso
            </p>
          </div>

          <div className="bg-white p-12 rounded-xl shadow-lg text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-2xl mb-4 text-gray-900">Fale comigo pelo WhatsApp</h3>
            <p className="text-gray-600 mb-8">
              Atendimento rápido e personalizado para esclarecer suas dúvidas e iniciar seu processo
            </p>
            <a
              href="https://wa.me/5565999163045"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors text-lg"
            >
              <MessageCircle className="w-6 h-6" />
              Conversar no WhatsApp
            </a>
            <p className="text-sm text-gray-500 mt-6">
              Horário de atendimento: de segunda a sexta, das 9h às 18h
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="mb-2">
            <span className="text-white">Serviços Contábeis Especializados</span>
          </p>
          <p className="text-sm">
            Ajudando concursados a iniciar no serviço público. CRC: 021200/O-6
          </p>
          <p className="text-sm mt-4 text-gray-500">
            © {new Date().getFullYear()} - Todos os direitos reservados
          </p>
        </div>
      </footer>
    </div>
  );
}