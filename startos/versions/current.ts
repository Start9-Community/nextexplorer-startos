import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '3.1.0:2',
  releaseNotes: {
    en_US: `- Set Admin Password asks for confirmation before it replaces an existing password, and says that the current password stops working.
- Remove Location starts with no location selected.
- Services that depend on NextExplorer, such as Paperless-ngx, can add a location of their own.`,
    es_ES: `- Establecer contraseña de administrador pide confirmación antes de reemplazar una contraseña existente e indica que la contraseña actual deja de funcionar.
- Eliminar ubicación empieza sin ninguna ubicación seleccionada.
- Los servicios que dependen de NextExplorer, como Paperless-ngx, pueden añadir una ubicación propia.`,
    de_DE: `- „Administrator-Passwort festlegen“ fragt vor dem Ersetzen eines vorhandenen Passworts nach einer Bestätigung und weist darauf hin, dass das aktuelle Passwort danach nicht mehr funktioniert.
- „Standort entfernen“ beginnt ohne vorausgewählten Standort.
- Dienste, die von NextExplorer abhängen, etwa Paperless-ngx, können einen eigenen Standort hinzufügen.`,
    pl_PL: `- „Ustaw hasło administratora” prosi o potwierdzenie przed zastąpieniem istniejącego hasła i informuje, że obecne hasło przestanie działać.
- „Usuń lokalizację” otwiera się bez wstępnie wybranej lokalizacji.
- Usługi zależne od NextExplorer, takie jak Paperless-ngx, mogą dodać własną lokalizację.`,
    fr_FR: `- Définir le mot de passe administrateur demande une confirmation avant de remplacer un mot de passe existant et indique que le mot de passe actuel cesse de fonctionner.
- Supprimer un emplacement s’ouvre sans emplacement présélectionné.
- Les services qui dépendent de NextExplorer, comme Paperless-ngx, peuvent ajouter leur propre emplacement.`,
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
