import { Button } from "@medusajs/ui"

function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 gap-4">
      <h1 className="text-3xl font-bold text-blue-600">
        Test de Tailwind CSS
      </h1>
      <p className="text-gray-600">
        Si le texte est bleu et centré, Tailwind fonctionne !
      </p>
      
      {/* Bouton Medusa UI */}
      <Button variant="primary">
        Bouton Medusa UI
      </Button>
    </div>
  )
}

export default App
