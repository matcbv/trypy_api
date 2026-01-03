import admin from 'firebase-admin';
// A partir da versão 17.5 do node, arquivos diferentes de .js e .mjs devem ser especificados com { type: 'json' } através da palavra-chave with.
import serviceAccount from '../../trypy-website-firebase-adminsdk-fbsvc-557656ad4d.json' with { type: 'json' };

// Podemos criar uma instância de nossa aplicação no Firebase através de initializeApp. Essa será a utilizada ao chamarmos demais métodos como admin.auth(), admin.firestore(), etc.
admin.initializeApp(
	{
		credential: admin.credential.cert(serviceAccount),
		// databaseURL: 'path/to/realtime-database' # Iremos utilizar Firestore, não sendo necessário o uso do RTDB,
	} /*, appName # Poderíamos passar um nome para nossa instância, no caso de estarmos trabalhando com mais de uma aplicação Firebase */,
);

export default admin;
