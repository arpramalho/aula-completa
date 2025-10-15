'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function OnboardingPage() {
  const router = useRouter()
  const [discipline, setDiscipline] = useState('')
  const [level, setLevel] = useState('')
  const [goal, setGoal] = useState('')

  const handleFinish = () => {
    // Futuro: persistir preferências do docente (Supabase)
    router.push('/')
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="text-2xl font-semibold mb-2">Onboarding</h1>
      <p className="text-sm text-gray-600 mb-6">Plataforma exclusiva para professores. Defina suas preferências para personalizar sua experiência.</p>

      <div className="grid gap-4">
        <div>
          <label className="block text-sm font-medium">Disciplina principal</label>
          <input
            type="text"
            value={discipline}
            onChange={(e) => setDiscipline(e.target.value)}
            placeholder="Ex.: Matemática, Português"
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Etapa educacional (BNCC)</label>
          <select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Selecione...</option>
            <option value="educacao_infantil">Educação Infantil</option>
            <option value="fundamental_I">Ensino Fundamental I (1º ao 5º ano)</option>
            <option value="fundamental_II">Ensino Fundamental II (6º ao 9º ano)</option>
            <option value="medio">Ensino Médio</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium">Objetivo inicial</label>
          <input
            type="text"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            placeholder="Ex.: Criar 5 planos de aula este mês"
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="mt-6 flex gap-3">
        <button
          onClick={() => router.push('/sign-in')}
          className="rounded-md border border-gray-300 px-4 py-2 hover:bg-gray-50"
        >
          Voltar ao login
        </button>
        <button
          onClick={handleFinish}
          className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Concluir e ir para Home
        </button>
      </div>
    </div>
  )
}