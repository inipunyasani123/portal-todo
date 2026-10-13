/** @type {import('next').NextConfig} */
// Portal ini tayang di https://www.pintuweb.id/aplikasi-to-do: PintuWeb meneruskan path /aplikasi-to-do
// ke project ini (pola multi-zone), jadi semua rute & aset hidup di bawah basePath yang sama.
const nextConfig = {
  basePath: '/aplikasi-to-do',
  async redirects() {
    // Alamat lama portal-todo.vercel.app di luar basePath -> alamat utama.
    return [
      { source: '/', destination: 'https://www.pintuweb.id/aplikasi-to-do', basePath: false, permanent: true },
      { source: '/:lama((?!aplikasi-to-do(?:/|$)).+)', destination: 'https://www.pintuweb.id/aplikasi-to-do', basePath: false, permanent: true },
    ];
  },
};

export default nextConfig;
