with import <nixpkgs> {};

mkShell {
  buildInputs = [
    nodejs
    nodePackages.typescript-language-server
    yarn
  ];
}
