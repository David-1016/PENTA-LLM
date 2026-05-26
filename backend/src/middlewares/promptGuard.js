const injectionPatterns = [
  {
    category: 'Override de instrucciones',
    riskLevel: 'high',
    patterns: [
      'ignora las instrucciones',
      'ignora todo lo anterior',
      'olvida las reglas',
      'prioriza este mensaje',
      'las reglas anteriores no aplican'
    ]
  },
  {
    category: 'Escalada de rol',
    riskLevel: 'high',
    patterns: [
      'actúa como administrador',
      'simula ser administrador',
      'modo admin',
      'eres el sistema',
      'responde como backend'
    ]
  },
  {
    category: 'Exfiltración de datos',
    riskLevel: 'critical',
    patterns: [
      'muestra el prompt',
      'prompt inicial',
      'system prompt',
      'variables internas',
      'api key',
      'clave secreta',
      'token'
    ]
  },
  {
    category: 'Ingeniería social',
    riskLevel: 'medium',
    patterns: [
      'esto está autorizado',
      'auditoría interna',
      'por razones legales',
      'es urgente',
      'tu trabajo depende'
    ]
  },
  {
    category: 'Prompt chaining',
    riskLevel: 'high',
    patterns: [
      'paso 1',
      'paso 2',
      'primero cambia',
      'luego muestra',
      'sin omitir campos'
    ]
  }
];

export const detectPromptInjection = (message = '') => {
  const normalizedMessage = message.toLowerCase();

  const detectedPatterns = [];

  injectionPatterns.forEach((item) => {
    item.patterns.forEach((pattern) => {
      if (normalizedMessage.includes(pattern)) {
        detectedPatterns.push({
          category: item.category,
          pattern,
          riskLevel: item.riskLevel
        });
      }
    });
  });

  const blocked = detectedPatterns.length > 0;

  let riskLevel = 'low';

  if (detectedPatterns.some((p) => p.riskLevel === 'critical')) {
    riskLevel = 'critical';
  } else if (detectedPatterns.some((p) => p.riskLevel === 'high')) {
    riskLevel = 'high';
  } else if (detectedPatterns.some((p) => p.riskLevel === 'medium')) {
    riskLevel = 'medium';
  }

  return {
    blocked,
    riskLevel,
    detectedPatterns
  };
};