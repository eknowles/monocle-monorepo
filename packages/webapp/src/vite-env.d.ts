/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TEST_SERVER: string
  readonly VITE_BRAND_NAME: string
  readonly VITE_BRAND_ICON: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}