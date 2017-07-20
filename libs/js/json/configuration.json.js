Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"Somos Nuvem","publishDate":"20/07/2017 13:56:55","pages":[{"id":"abb047e1-b3dd-47c9-9e61-3cbde7991baf","name":"Processos Somos Nuvem","version":"1.0","author":"pedro","image":"files\\diagrams\\Processos_Somos_Nuvem.png","isSubprocessPage":false,"elements":[{"id":"86674ed2-5fb5-4a52-952b-16b70f5877f1","name":"Processos Somos Nuvem","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":425.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"e740b65b-6909-4d86-a47a-f6a8dc31a17d","name":"Vendas","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":153.0,"y":44.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[{"id":"ProcessRef","name":"Processo","value":"Vendas - Vendas","type":"url","pageRef":"a38e5ccd-b7f6-4368-b147-8b0c13938c36","processPageRef":"b5b56eb4-c8db-47f6-bd30-628682cb41da"}]},{"id":"3aa56b2b-7f21-4079-bdc0-105f5df4c23a","name":"Suporte Técnico","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":477.0,"y":344.5}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[{"id":"ProcessRef","name":"Processo","value":"Suporte Técnico - Suporte Técnico","type":"url","pageRef":"b1b52981-6963-41fb-96f2-d229e84e9874","processPageRef":"95de2a80-194a-4c2c-bc5f-ca73def83d2f"}]},{"id":"63d1e607-75d1-4965-92ab-1f3b52f8530c","name":"Projetos ","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":152.5,"y":344.5}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[{"id":"ProcessRef","name":"Processo","value":"Projetos - Projetos ","type":"url","pageRef":"978f6133-da8b-4a4d-8f2f-35e5223ec971","processPageRef":"7d2bf82d-087b-4a12-8a00-7f4d47b6c6c2"}]},{"id":"2735f776-142a-42e7-a368-3b48041e0fba","name":"Addons","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":312.0,"y":345.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[{"id":"ProcessRef","name":"Processo","value":"Addons - Addons","type":"url","pageRef":"17cc52e5-dca3-4c5c-ada4-4b765837e950","processPageRef":"a69e426c-5dc7-4cb0-817c-5df375f94299"}]},{"id":"94e26f97-1db5-4667-ba3c-8360a3e5befa","name":"Administrativo","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":153.0,"y":188.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[{"id":"ProcessRef","name":"Processo","value":"Administrativo - Administrativo","type":"url","pageRef":"1d5cdd63-4925-4731-ab10-bdb698ddf632","processPageRef":"5e0a679a-8773-4dc2-9cbf-3f93868d7797"}]}]}]},{"id":"497fda04-0010-4e21-8b25-b56eb6127f54","name":"Venda G Suite","version":"1.0","author":"pedro","image":"files\\diagrams\\Venda_G_Suite.png","isSubprocessPage":false,"elements":[{"id":"bc2fc186-537c-41a8-ad8a-bc064a3f49e1","name":"Venda G Suite","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":788.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"fca5c4a0-1f5c-4484-a6c7-d8e09f1596d6","name":"Event","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":154.0,"y":327.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"a73fda81-9410-4b9a-882a-0ac39dda92f6","name":"Prospectar Clientes","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":243.0,"y":312.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"02e0bd6a-0bdd-4d82-886d-1ede2561bfeb","name":"Cliente demonstrou interesse?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":382.0,"y":322.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"ab918ea9-fb28-421d-b206-d8dad9b90565","name":"Realizar Reunião(ões) de pré-venda)","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":470.0,"y":312.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"19fc1e62-8bf2-4329-b4de-d62048813453","name":"Cliente demonstrou real interesse?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":620.0,"y":322.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"dd6d802e-71ac-4e71-a27c-bb51c395099b","name":"Elaborar Propsota Comercial","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":704.0,"y":312.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"678a9a38-32c4-420e-9c8e-38255e5be051","name":"Apresentar Proposta Comercial","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":841.0,"y":313.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"2a6d53c5-6843-46f4-919d-6c45b46c8cab","name":"Proposta Aprovada?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":986.0,"y":323.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"6f566786-8f0d-42f6-9b6b-1d1e50b03cf4","name":"Cliente Ainda Possui Interesse?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":986.0,"y":200.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"2919edef-2aed-4d02-a84d-65a9fadf2778","name":"Event","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":991.0,"y":120.553192}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"80e5910b-197b-4086-a8d8-def57473eb09","name":"Elaborar Contrato e SOW","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1077.0,"y":313.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"13098ec1-e963-4072-8dd6-92b2a534078b","name":"Colher Assinatura(s) do Contrato e SOW","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1233.0,"y":313.0}],"radius":0.0,"height":60.0,"width":112.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d242d5c3-3741-4bc7-95cd-d9f91deb528a","name":"Preencher Handover","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1412.21277,"y":313.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c1153df4-3641-4f48-88d1-ab93a61cd667","name":"Handover Aprovado","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1566.29077,"y":323.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"746202d9-a140-4c3d-b7d9-4dc0ed92b881","name":"Gerenciamento de Novo Projeto G Suite","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":1675.0,"y":313.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[{"id":"ProcessRef","name":"Processo","value":"Implantação G Suite - Implantação G Suite","type":"url","pageRef":"a0383fea-697a-4fcf-94d4-4e0313ff057c","processPageRef":"53163c2c-4abb-4864-bab6-1db3f4c09e3a"}]},{"id":"26f08591-f227-495d-b3d8-852fb5c0ab41","name":"Event","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1815.97168,"y":328.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"d47ae1c5-b04a-430a-88a8-7bd23187418f","name":"Equipe de Vendas","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":788.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]},{"id":"a0383fea-697a-4fcf-94d4-4e0313ff057c","name":"Implantação G Suite","version":"1.0","author":"pedro","image":"files\\diagrams\\Implantacao_G_Suite.png","isSubprocessPage":false,"elements":[{"id":"53163c2c-4abb-4864-bab6-1db3f4c09e3a","name":"Implantação G Suite","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":571.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"469338ef-a8a4-4aba-8903-44e87b97403f","name":"Event","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":131.0,"y":117.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"b7f7f8e4-a103-4920-b4ab-6f6cb80b8d97","name":"Designar PM Responsável","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":238.0,"y":102.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"76e078a6-1e1a-4a14-a5bb-85a38d20c9a0","name":"Categorizar Projeto","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":238.0,"y":393.7}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"6241a6e3-7d2c-4e29-8017-3283d5906776","name":"Gateway","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":398.3333,"y":403.7}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Projeto 3 Fases","elementType":"SequenceFlow","properties":[]},{"name":"Big Bang","elementType":"SequenceFlow","properties":[]}]},{"id":"9760f77e-894b-4561-8b6f-ccdeccbbbc1f","name":"Implantação Projeto 3 Fases","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":472.0,"y":474.7}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"isPublished":false,"elementType":"CallActivity","properties":[{"id":"ProcessRef","name":"Processo","value":"Implantação Projeto 3 Fases - Implantação Projeto 3 Fases","type":"text"}]},{"id":"95346777-919b-4d31-a335-1eeeadfdb408","name":"Implantação Projeto Big Bang","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":474.0,"y":305.7}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"isPublished":false,"elementType":"CallActivity","properties":[{"id":"ProcessRef","name":"Processo","value":"Implantação Projeto Big Bang - Implantação Projeto Big Bang","type":"text"}]},{"id":"f1b3677d-4e54-4845-af23-8644082d4599","name":"Event","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":611.0,"y":408.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"64a4cba2-488e-4dfe-af1f-7890eb9b5a99","name":"Líder de PM","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":211.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"f47956ea-dcdf-4bde-a448-d4d30e2ea489","name":"PM","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":231.0}],"radius":0.0,"height":360.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]},{"id":"a38e5ccd-b7f6-4368-b147-8b0c13938c36","name":"Vendas","version":"1.0","author":"pedro","image":"files\\diagrams\\Vendas.png","isSubprocessPage":false,"elements":[{"id":"b5b56eb4-c8db-47f6-bd30-628682cb41da","name":"Vendas","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":350.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"457c36be-c8a8-4892-8d40-6ab9d6e81d47","name":"Venda G Suite","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":169.0,"y":79.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[{"id":"ProcessRef","name":"Processo","value":"Venda G Suite - Venda G Suite","type":"url","pageRef":"497fda04-0010-4e21-8b25-b56eb6127f54","processPageRef":"bc2fc186-537c-41a8-ad8a-bc064a3f49e1"}]},{"id":"7e3b6ac9-fe7e-45b2-9fec-31d754d31ff0","name":"Venda DNS","elementImage":"files\\bpmnElements\\SubProcess.png","imageBounds":{"points":[{"x":168.0,"y":238.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"SubProcess","properties":[]}]}]},{"id":"978f6133-da8b-4a4d-8f2f-35e5223ec971","name":"Projetos","version":"1.0","author":"pedro","image":"files\\diagrams\\Projetos.png","isSubprocessPage":false,"elements":[{"id":"7d2bf82d-087b-4a12-8a00-7f4d47b6c6c2","name":"Projetos ","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":350.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"c4f8adef-daf5-4392-a93c-ff98abb1dd42","name":"Implantação G Suite","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":134.0,"y":65.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[{"id":"ProcessRef","name":"Processo","value":"Implantação G Suite - Implantação G Suite","type":"url","pageRef":"a0383fea-697a-4fcf-94d4-4e0313ff057c","processPageRef":"53163c2c-4abb-4864-bab6-1db3f4c09e3a"}]},{"id":"17ba72d0-5061-4249-982d-a22578019406","name":"Implantação DNS","elementImage":"files\\bpmnElements\\CallActivity.png","imageBounds":{"points":[{"x":137.0,"y":233.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"CallActivity","properties":[]}]}]},{"id":"b1b52981-6963-41fb-96f2-d229e84e9874","name":"Suporte Técnico","version":"1.0","author":"pedro","image":"files\\diagrams\\Suporte_Tecnico.png","isSubprocessPage":false,"elements":[{"id":"95de2a80-194a-4c2c-bc5f-ca73def83d2f","name":"Suporte Técnico","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":621.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"d13eebe2-822b-4c56-ade2-aaa6e3cf7b7e","name":"Event","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":128.0,"y":78.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"36c9a18f-4f28-451f-9f1c-4c30ed8045a8","name":"Abrir um Chamado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":209.0,"y":63.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"664ad637-901a-41c2-8d3c-48ac97349cc6","name":"Realizar Análise do Chamado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":209.0,"y":231.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"fa4fd07f-470a-4f2b-b503-fa7f96362355","name":"Conhece Solução?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":234.0,"y":334.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Realizar Atendimento","elementType":"SequenceFlow","properties":[]},{"name":"Portão","elementType":"SequenceFlow","properties":[]}]},{"id":"34680d26-da14-4083-a939-7630229f0819","name":"Gateway","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":234.0,"y":443.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Realizar Atendimento","elementType":"SequenceFlow","properties":[]},{"name":"Abrir Chamado no Google","elementType":"SequenceFlow","properties":[]}]},{"id":"a67e40ee-7445-470b-8691-5a593e241aa7","name":"Abrir Chamado no Google","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":209.0,"y":535.8824}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"eaf9021b-8ef1-450d-939c-ce41574b7d28","name":"Realizar Atendimento","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":347.0,"y":324.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d87c898b-5a2e-4e4b-a31f-52242774741f","name":"Encerrar Chamado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":509.0,"y":324.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e27f99f6-38c6-42a2-95d5-ff08912e2df9","name":"Event","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":642.0,"y":339.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"e64e4148-10b3-43d3-b69c-c5775eafa883","name":"Cliente","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":149.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"d2ed4d0c-fe28-4288-b659-8f7b057a363e","name":"PM","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":169.0}],"radius":0.0,"height":472.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]},{"id":"17cc52e5-dca3-4c5c-ada4-4b765837e950","name":"Addons","version":"1.0","author":"pedro","image":"files\\diagrams\\Addons.png","isSubprocessPage":false,"elements":[{"id":"a69e426c-5dc7-4cb0-817c-5df375f94299","name":"Addons","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":471.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"bc28f62c-2dd0-4530-8d24-1acd8ce76258","name":"Event","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":126.0,"y":103.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"4e6788fa-5c1b-4c9e-91db-ed96fc00eb50","name":"Abrir Solicitação via Suporte Técnico","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":217.0,"y":88.0}],"radius":0.0,"height":60.0,"width":117.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"7eef7d91-1317-4b90-97a3-34d915019e61","name":"Acessar Calculadora de Addon","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":230.5,"y":340.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"0836ec6e-a4f0-4776-a0c8-c8eed56c1713","name":"Calcular Valor do Addon","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":364.0,"y":340.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"78776d17-fe8a-4223-b374-06f8becc6efa","name":"Inserir Valor no Chamado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":513.0,"y":341.0}],"radius":0.0,"height":58.0,"width":102.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"9a6bd451-b47f-41dc-9e22-1e3090ddb95c","name":"Encaminhar ao  Cliente para Aprovação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":680.0,"y":340.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ceaaa34b-dfca-4f3c-bfc1-d7e29de375bd","name":"Analisar Valor","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":680.0,"y":85.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"558bdda5-ab83-4112-b75e-1a4a1d8ff2ef","name":"Aprovado?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":848.0,"y":95.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"93a792c6-7a13-45cd-acde-a94ab03d18e6","name":"Adicionar Licença no Painel de Revendedor","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":823.0,"y":330.0}],"radius":0.0,"height":94.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"6e661af8-ddba-45c9-8c82-20aa422665de","name":"Preencher Planilha de Controle de Addon","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":981.0,"y":347.0}],"radius":0.0,"height":60.0,"width":118.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"cfffee2b-92c5-412e-96b8-70bdd3d4c815","name":"Encerrar Chamado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1183.0,"y":347.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"cef18595-f613-4fff-ba46-2f5d7b989546","name":"Event","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1336.0,"y":362.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"1e55b2f0-5090-40be-a299-1c2686a932c8","name":"Event","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":976.0,"y":100.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"358c0bce-da77-4833-9843-b481d05a80cc","name":"Cliente","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":200.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"2466ea38-f953-43ca-86bc-3c514ea0cbda","name":"PM","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":220.0}],"radius":0.0,"height":271.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]},{"id":"1d5cdd63-4925-4731-ab10-bdb698ddf632","name":"Administrativo","version":"1.0","author":"pedro","image":"files\\diagrams\\Administrativo.png","isSubprocessPage":false,"elements":[{"id":"5e0a679a-8773-4dc2-9cbf-3f93868d7797","name":"Administrativo","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":413.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"ed224854-d97b-4311-88b2-0e75e4f6cac8","name":"Renovação","elementImage":"files\\bpmnElements\\SubProcess.png","imageBounds":{"points":[{"x":148.0,"y":51.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"SubProcess","properties":[]},{"id":"3766c066-402d-4342-8978-dd9a60110e38","name":"Faturamento Addons","elementImage":"files\\bpmnElements\\SubProcess.png","imageBounds":{"points":[{"x":148.0,"y":171.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"SubProcess","properties":[]},{"id":"c45d426f-da01-488e-ba0c-640d2d007110","name":"Folha de Ponto","elementImage":"files\\bpmnElements\\SubProcess.png","imageBounds":{"points":[{"x":150.0,"y":312.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"SubProcess","properties":[]},{"id":"79af544e-baf6-475d-bd56-bb8781515b81","name":"Pagamento de Salários e Vale Refeição","elementImage":"files\\bpmnElements\\SubProcess.png","imageBounds":{"points":[{"x":326.0,"y":47.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"SubProcess","properties":[]},{"id":"22c3d723-c83b-49b8-9b00-4c9fab115d55","name":"Administrativo","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":413.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Proceso","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Executor","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"17cc52e5-dca3-4c5c-ada4-4b765837e950","containerName":"Addons","isSubprocess":false,"elements":[{"id":"a69e426c-5dc7-4cb0-817c-5df375f94299","value":"Addons"},{"id":"358c0bce-da77-4833-9843-b481d05a80cc","value":"Cliente"},{"id":"2466ea38-f953-43ca-86bc-3c514ea0cbda","value":"PM"},{"id":"bc28f62c-2dd0-4530-8d24-1acd8ce76258","value":""},{"id":"4e6788fa-5c1b-4c9e-91db-ed96fc00eb50","value":"Abrir Solicitação via Suporte Técnico"},{"id":"7eef7d91-1317-4b90-97a3-34d915019e61","value":"Acessar Calculadora de Addon"},{"id":"0836ec6e-a4f0-4776-a0c8-c8eed56c1713","value":"Calcular Valor do Addon"},{"id":"78776d17-fe8a-4223-b374-06f8becc6efa","value":"Inserir Valor no Chamado"},{"id":"9a6bd451-b47f-41dc-9e22-1e3090ddb95c","value":"Encaminhar ao  Cliente para Aprovação"},{"id":"ceaaa34b-dfca-4f3c-bfc1-d7e29de375bd","value":"Analisar Valor"},{"id":"558bdda5-ab83-4112-b75e-1a4a1d8ff2ef","value":"Aprovado?"},{"id":"1e55b2f0-5090-40be-a299-1c2686a932c8","value":""},{"id":"93a792c6-7a13-45cd-acde-a94ab03d18e6","value":"Adicionar Licença no Painel de Revendedor"},{"id":"6e661af8-ddba-45c9-8c82-20aa422665de","value":"Preencher Planilha de Controle de Addon"},{"id":"cfffee2b-92c5-412e-96b8-70bdd3d4c815","value":"Encerrar Chamado"},{"id":"cef18595-f613-4fff-ba46-2f5d7b989546","value":""}]},{"containerId":"1d5cdd63-4925-4731-ab10-bdb698ddf632","containerName":"Administrativo","isSubprocess":false,"elements":[{"id":"5e0a679a-8773-4dc2-9cbf-3f93868d7797","value":"Administrativo"},{"id":"22c3d723-c83b-49b8-9b00-4c9fab115d55","value":"Administrativo"},{"id":"ed224854-d97b-4311-88b2-0e75e4f6cac8","value":"Renovação"},{"id":"3766c066-402d-4342-8978-dd9a60110e38","value":"Faturamento Addons"},{"id":"c45d426f-da01-488e-ba0c-640d2d007110","value":"Folha de Ponto"},{"id":"79af544e-baf6-475d-bd56-bb8781515b81","value":"Pagamento de Salários e Vale Refeição"}]},{"containerId":"ed224854-d97b-4311-88b2-0e75e4f6cac8","containerName":"Renovação","isSubprocess":true,"elements":[]},{"containerId":"3766c066-402d-4342-8978-dd9a60110e38","containerName":"Faturamento Addons","isSubprocess":true,"elements":[]},{"containerId":"c45d426f-da01-488e-ba0c-640d2d007110","containerName":"Folha de Ponto","isSubprocess":true,"elements":[]},{"containerId":"79af544e-baf6-475d-bd56-bb8781515b81","containerName":"Pagamento de Salários e Vale Refeição","isSubprocess":true,"elements":[]},{"containerId":"497fda04-0010-4e21-8b25-b56eb6127f54","containerName":"Venda G Suite","isSubprocess":false,"elements":[{"id":"bc2fc186-537c-41a8-ad8a-bc064a3f49e1","value":"Venda G Suite"},{"id":"d47ae1c5-b04a-430a-88a8-7bd23187418f","value":"Equipe de Vendas"},{"id":"fca5c4a0-1f5c-4484-a6c7-d8e09f1596d6","value":""},{"id":"a73fda81-9410-4b9a-882a-0ac39dda92f6","value":"Prospectar Clientes"},{"id":"02e0bd6a-0bdd-4d82-886d-1ede2561bfeb","value":"Cliente demonstrou interesse?"},{"id":"ab918ea9-fb28-421d-b206-d8dad9b90565","value":"Realizar Reunião(ões) de pré-venda)"},{"id":"19fc1e62-8bf2-4329-b4de-d62048813453","value":"Cliente demonstrou real interesse?"},{"id":"dd6d802e-71ac-4e71-a27c-bb51c395099b","value":"Elaborar Propsota Comercial"},{"id":"2a6d53c5-6843-46f4-919d-6c45b46c8cab","value":"Proposta Aprovada?"},{"id":"80e5910b-197b-4086-a8d8-def57473eb09","value":"Elaborar Contrato e SOW"},{"id":"678a9a38-32c4-420e-9c8e-38255e5be051","value":"Apresentar Proposta Comercial"},{"id":"6f566786-8f0d-42f6-9b6b-1d1e50b03cf4","value":"Cliente Ainda Possui Interesse?"},{"id":"2919edef-2aed-4d02-a84d-65a9fadf2778","value":""},{"id":"13098ec1-e963-4072-8dd6-92b2a534078b","value":"Colher Assinatura(s) do Contrato e SOW"},{"id":"d242d5c3-3741-4bc7-95cd-d9f91deb528a","value":"Preencher Handover"},{"id":"c1153df4-3641-4f48-88d1-ab93a61cd667","value":"Handover Aprovado"},{"id":"746202d9-a140-4c3d-b7d9-4dc0ed92b881","value":"Gerenciamento de Novo Projeto G Suite"},{"id":"26f08591-f227-495d-b3d8-852fb5c0ab41","value":""},{"id":"44c41554-63f9-47df-a4be-46d2ece9f635"},{"id":"5e725bfd-4aea-4246-9cdd-b1da73147e11"}]},{"containerId":"4ebe2dbc-5061-4d25-bcbe-9a3607015360","containerName":"Implantação Projeto 3 Fases","isSubprocess":false,"elements":[{"id":"ae73afbf-c12b-44a0-9dea-c4ebd4c86d60","value":"Implantação Projeto 3 Fases"},{"id":"3fea68d3-be01-49de-8f9f-77f79d949f50","value":"PM"}]},{"containerId":"7131174c-0e03-46cb-bd5d-caf15e685391","containerName":"Implantação Projeto Big Bang","isSubprocess":false,"elements":[{"id":"d3e5c589-c029-4582-b8fa-6c4e73a77085","value":"Implantação Projeto Big Bang"},{"id":"7ebd292b-84a5-4512-af54-e9fd5ce8e1ce","value":"PM"}]},{"containerId":"978f6133-da8b-4a4d-8f2f-35e5223ec971","containerName":"Projetos","isSubprocess":false,"elements":[{"id":"7d2bf82d-087b-4a12-8a00-7f4d47b6c6c2","value":"Projetos "},{"id":"c4f8adef-daf5-4392-a93c-ff98abb1dd42","value":"Implantação G Suite"},{"id":"17ba72d0-5061-4249-982d-a22578019406","value":"Implantação DNS"}]},{"containerId":"a0383fea-697a-4fcf-94d4-4e0313ff057c","containerName":"Implantação G Suite","isSubprocess":false,"elements":[{"id":"53163c2c-4abb-4864-bab6-1db3f4c09e3a","value":"Implantação G Suite"},{"id":"64a4cba2-488e-4dfe-af1f-7890eb9b5a99","value":"Líder de PM"},{"id":"f47956ea-dcdf-4bde-a448-d4d30e2ea489","value":"PM"},{"id":"469338ef-a8a4-4aba-8903-44e87b97403f","value":""},{"id":"b7f7f8e4-a103-4920-b4ab-6f6cb80b8d97","value":"Designar PM Responsável"},{"id":"76e078a6-1e1a-4a14-a5bb-85a38d20c9a0","value":"Categorizar Projeto"},{"id":"6241a6e3-7d2c-4e29-8017-3283d5906776","value":""},{"id":"95346777-919b-4d31-a335-1eeeadfdb408","value":"Implantação Projeto Big Bang"},{"id":"9760f77e-894b-4561-8b6f-ccdeccbbbc1f","value":"Implantação Projeto 3 Fases"},{"id":"f1b3677d-4e54-4845-af23-8644082d4599","value":""}]},{"containerId":"a38e5ccd-b7f6-4368-b147-8b0c13938c36","containerName":"Vendas","isSubprocess":false,"elements":[{"id":"b5b56eb4-c8db-47f6-bd30-628682cb41da","value":"Vendas"},{"id":"457c36be-c8a8-4892-8d40-6ab9d6e81d47","value":"Venda G Suite"},{"id":"7e3b6ac9-fe7e-45b2-9fec-31d754d31ff0","value":"Venda DNS"}]},{"containerId":"7e3b6ac9-fe7e-45b2-9fec-31d754d31ff0","containerName":"Venda DNS","isSubprocess":true,"elements":[]},{"containerId":"abb047e1-b3dd-47c9-9e61-3cbde7991baf","containerName":"Processos Somos Nuvem","isSubprocess":false,"elements":[{"id":"86674ed2-5fb5-4a52-952b-16b70f5877f1","value":"Processos Somos Nuvem"},{"id":"e740b65b-6909-4d86-a47a-f6a8dc31a17d","value":"Vendas"},{"id":"3aa56b2b-7f21-4079-bdc0-105f5df4c23a","value":"Suporte Técnico"},{"id":"63d1e607-75d1-4965-92ab-1f3b52f8530c","value":"Projetos "},{"id":"2735f776-142a-42e7-a368-3b48041e0fba","value":"Addons"},{"id":"94e26f97-1db5-4667-ba3c-8360a3e5befa","value":"Administrativo"}]},{"containerId":"b1b52981-6963-41fb-96f2-d229e84e9874","containerName":"Suporte Técnico","isSubprocess":false,"elements":[{"id":"95de2a80-194a-4c2c-bc5f-ca73def83d2f","value":"Suporte Técnico"},{"id":"e64e4148-10b3-43d3-b69c-c5775eafa883","value":"Cliente"},{"id":"d2ed4d0c-fe28-4288-b659-8f7b057a363e","value":"PM"},{"id":"d13eebe2-822b-4c56-ade2-aaa6e3cf7b7e","value":""},{"id":"36c9a18f-4f28-451f-9f1c-4c30ed8045a8","value":"Abrir um Chamado"},{"id":"664ad637-901a-41c2-8d3c-48ac97349cc6","value":"Realizar Análise do Chamado"},{"id":"fa4fd07f-470a-4f2b-b503-fa7f96362355","value":"Conhece Solução?"},{"id":"eaf9021b-8ef1-450d-939c-ce41574b7d28","value":"Realizar Atendimento"},{"id":"d87c898b-5a2e-4e4b-a31f-52242774741f","value":"Encerrar Chamado"},{"id":"e27f99f6-38c6-42a2-95d5-ff08912e2df9","value":""},{"id":"34680d26-da14-4083-a939-7630229f0819","value":""},{"id":"a67e40ee-7445-470b-8691-5a593e241aa7","value":"Abrir Chamado no Google"},{"id":"7bc2c7c3-1913-41f2-b740-a770c1dfd5fc"},{"id":"001f93e1-cf42-4563-9d3b-6bd4b1dd1a8e"}]}]}