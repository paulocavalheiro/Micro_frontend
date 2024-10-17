# MicrofrontEnd
Microfrontend Nextjs v13

#TAGS: @Nextjs13, @webpack, @module-federation
*projeto financas fornece componente modular para o projeto vendas*

*Passos:

	Instalar:

	Instale o nextjs, webpack e module-federation.
	Criar:

	Crie um arquivo .env na raiz do projeto e declare NEXT_PRIVATE_LOCAL_WEBPACK=true
	Crie um arquivo .babelrc e declare no eslint:
	{
	  "extends": ["next/babel", "next/core-web-vitals"]	}

   	
	

*Configurar:

	No next.config.js, configure module.exports, webpack, e NextFederationPlugin.
	No package.json, configure a porta com "dev": "next dev -p 3000" (no projeto receptor e no projeto fornecedor).
	Importe dinamicamente a página do projeto receptor no projeto fornecedor.
	crie arquivo @types/module.d.ts no projeto receptor e declare o modulo (declare module "financas/pages/dashboard")

# Referências:
	https://www.npmjs.com/package/@module-federation/nextjs-mf?activeTab=readme
	https://nextjs.org/docs



