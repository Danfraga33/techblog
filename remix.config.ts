module.exports = {
  future: {
    unstable_postcss: true,
  },
  serverDependenciesToBundle: [
    // Explicitly bundle Lucide icons (optional, but can help)
    /^lucide-react/,
  ],
};
