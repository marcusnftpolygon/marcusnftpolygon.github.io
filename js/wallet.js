async function connectPT() {
  const isPhantomInstalled = window.solana && window.solana.isPhantom;
  if (isPhantomInstalled) {
    try {
      await window.solana.connect();
    } catch (err) {}
  }
}
