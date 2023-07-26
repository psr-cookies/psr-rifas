const Ziggy = {"url":"http:\/\/laravel.test","port":null,"defaults":{},"routes":{"filament.asset":{"uri":"filament\/assets\/{file}","methods":["GET","HEAD"],"wheres":{"file":".*"}},"filament.auth.logout":{"uri":"filament\/logout","methods":["POST"]},"filament.auth.login":{"uri":"admin\/login","methods":["GET","HEAD"]},"filament.pages.dashboard":{"uri":"admin","methods":["GET","HEAD"]},"filament.resources.orders.index":{"uri":"admin\/orders","methods":["GET","HEAD"]},"filament.resources.orders.create":{"uri":"admin\/orders\/create","methods":["GET","HEAD"]},"filament.resources.orders.edit":{"uri":"admin\/orders\/{record}\/edit","methods":["GET","HEAD"]},"filament.resources.payments.index":{"uri":"admin\/payments","methods":["GET","HEAD"]},"filament.resources.rifas.index":{"uri":"admin\/rifas","methods":["GET","HEAD"]},"filament.resources.rifas.create":{"uri":"admin\/rifas\/create","methods":["GET","HEAD"]},"filament.resources.rifas.edit":{"uri":"admin\/rifas\/{record}\/edit","methods":["GET","HEAD"]},"filament.resources.slideshows.index":{"uri":"admin\/slideshows","methods":["GET","HEAD"]},"filament.resources.slideshows.create":{"uri":"admin\/slideshows\/create","methods":["GET","HEAD"]},"filament.resources.slideshows.edit":{"uri":"admin\/slideshows\/{record}\/edit","methods":["GET","HEAD"]},"filament.resources.winners.index":{"uri":"admin\/winners","methods":["GET","HEAD"]},"filament.resources.winners.create":{"uri":"admin\/winners\/create","methods":["GET","HEAD"]},"filament.resources.winners.edit":{"uri":"admin\/winners\/{record}\/edit","methods":["GET","HEAD"]},"sanctum.csrf-cookie":{"uri":"sanctum\/csrf-cookie","methods":["GET","HEAD"]},"livewire.message":{"uri":"livewire\/message\/{name}","methods":["POST"]},"livewire.message-localized":{"uri":"{locale}\/livewire\/message\/{name}","methods":["POST"]},"livewire.upload-file":{"uri":"livewire\/upload-file","methods":["POST"]},"livewire.preview-file":{"uri":"livewire\/preview-file\/{filename}","methods":["GET","HEAD"]},"ignition.healthCheck":{"uri":"_ignition\/health-check","methods":["GET","HEAD"]},"ignition.executeSolution":{"uri":"_ignition\/execute-solution","methods":["POST"]},"ignition.updateConfig":{"uri":"_ignition\/update-config","methods":["POST"]},"home":{"uri":"\/","methods":["GET","HEAD"]},"rifas.show.orders":{"uri":"rifas\/{rifa}\/orders\/{telephone}","methods":["GET","HEAD"],"bindings":{"rifa":"slug"}},"rifas.show":{"uri":"rifas\/{rifa}","methods":["GET","HEAD"],"bindings":{"rifa":"slug"}},"payment.show":{"uri":"payments\/{payment}","methods":["GET","HEAD"],"bindings":{"payment":"id"}},"payment.check":{"uri":"payments\/{payment}\/check","methods":["GET","HEAD"],"bindings":{"payment":"id"}},"payment.update":{"uri":"payments\/notification","methods":["POST"]},"payment.store":{"uri":"payments","methods":["POST"]},"orders.store":{"uri":"orders","methods":["POST"]},"orders.show":{"uri":"orders\/{id}","methods":["GET","HEAD"]},"terms":{"uri":"terms","methods":["GET","HEAD"]},"rifas.finalizadas":{"uri":"rifas-finalizadas","methods":["GET","HEAD"]},"testimonials.list":{"uri":"depoimentos","methods":["GET","HEAD"]},"contact":{"uri":"contato","methods":["GET","HEAD"]},"contact.post":{"uri":"contato","methods":["POST"]}}};

if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
    Object.assign(Ziggy.routes, window.Ziggy.routes);
}

export { Ziggy };
