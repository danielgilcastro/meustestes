function online() {
    setTimeout(function() { console.log('atualizado'), online(), atualiza() }, 1000);
}