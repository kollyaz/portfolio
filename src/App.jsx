import { lazy, Suspense } from 'react';
import { Layout } from './components/layout/Layout';
import { Hero } from './components/sections/Hero';
import { GlobalStyles } from './styles/GlobalStyles';
import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';
import { Loader } from './components/common/Loader';

// Lazy load non-critical components
const Projects = lazy(() => import('./components/sections/Projects'));
const Skills = lazy(() => import('./components/sections/Skills'));
const Contact = lazy(() => import('./components/sections/Contact'));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        
        <Hero />
        
        <Suspense fallback={<Loader text="Loading projects..." />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<Loader text="Loading skills..." />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<Loader text="Loading contact..." />}>
          <Contact />
        </Suspense>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
