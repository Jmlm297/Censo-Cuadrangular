<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 py-8 px-4">
    <div class="max-w-4xl mx-auto">
      <!-- Encabezado -->
      <div class="text-center mb-8">
        <h1 class="text-3xl md:text-4xl font-bold text-white mb-2">Censo Ministerial</h1>
        <p class="text-purple-200">Registro de Miembros de la Iglesia</p>
      </div>

      <!-- Formulario -->
      <form @submit.prevent="guardarCenso" class="space-y-6">
        <!-- Sección 1: Información Personal -->
        <div class="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-xl">
          <h2 class="text-xl font-semibold text-white mb-4 flex items-center">
            <i class="fas fa-user mr-2 text-purple-400"></i>
            Información Personal
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-purple-200 mb-1">Nombres y Apellidos</label>
              <input
                v-model="form.nombreCompleto"
                type="text"
                class="w-full bg-white/5 border border-purple-400/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-400"
              />
            </div>
            <div>
              <label class="block text-purple-200 mb-1">Cédula de Identidad</label>
              <input
                v-model="form.cedula"
                type="text"
                class="w-full bg-white/5 border border-purple-400/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-400"
              />
            </div>
          </div>
        </div>

        <!-- Sección 2: Datos Personales -->
        <div class="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-xl">
          <h2 class="text-xl font-semibold text-white mb-4 flex items-center">
            <i class="fas fa-info-circle mr-2 text-purple-400"></i>
            Datos Personales
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-purple-200 mb-1">Dirección</label>
              <textarea
                v-model="form.direccion"
                class="w-full bg-white/5 border border-purple-400/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-400"
                rows="2"
              ></textarea>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-purple-200 mb-1">Fecha de Nacimiento</label>
                <input
                  v-model="form.fechaNacimiento"
                  type="date"
                  class="w-full bg-white/5 border border-purple-400/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-400"
                />
              </div>
              <div>
                <label class="block text-purple-200 mb-1">Edad</label>
                <input
                  v-model="form.edad"
                  type="number"
                  class="w-full bg-white/5 border border-purple-400/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-400"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Sección 3: Estado Civil y Profesión -->
        <div class="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-xl">
          <h2 class="text-xl font-semibold text-white mb-4 flex items-center">
            <i class="fas fa-briefcase mr-2 text-purple-400"></i>
            Información Profesional
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-purple-200 mb-1">Estado Civil</label>
              <select
                v-model="form.estadoCivil"
                class="w-full bg-white/5 border border-purple-400/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-400"
              >
                <option value="S">Soltero(a)</option>
                <option value="C">Casado(a)</option>
                <option value="D">Divorciado(a)</option>
                <option value="V">Viudo(a)</option>
              </select>
            </div>
            <div>
              <label class="block text-purple-200 mb-1">Profesión u Oficio</label>
              <input
                v-model="form.profesion"
                type="text"
                class="w-full bg-white/5 border border-purple-400/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-400"
              />
            </div>
          </div>
        </div>

        <!-- Sección 4: Información Ministerial -->
        <div class="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-xl">
          <h2 class="text-xl font-semibold text-white mb-4 flex items-center">
            <i class="fas fa-church mr-2 text-purple-400"></i>
            Información Ministerial
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-purple-200 mb-1">Fecha de Conversión</label>
              <input
                v-model="form.fechaConversion"
                type="date"
                class="w-full bg-white/5 border border-purple-400/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-400"
              />
            </div>
            <div>
              <label class="block text-purple-200 mb-1">Dones y Talentos</label>
              <textarea
                v-model="form.donesTalentos"
                class="w-full bg-white/5 border border-purple-400/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-400"
                rows="2"
              ></textarea>
            </div>
          </div>
        </div>

        <!-- Sección 5: Estado Espiritual -->
        <div class="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-xl">
          <h2 class="text-xl font-semibold text-white mb-4 flex items-center">
            <i class="fas fa-pray mr-2 text-purple-400"></i>
            Estado Espiritual
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="flex items-center space-x-3">
              <label class="text-purple-200">Bautizado en Aguas</label>
              <div class="flex space-x-4">
                <label class="flex items-center">
                  <input type="radio" v-model="form.bautizadoAguas" value="S" class="mr-2" />
                  <span class="text-white">Sí</span>
                </label>
                <label class="flex items-center">
                  <input type="radio" v-model="form.bautizadoAguas" value="N" class="mr-2" />
                  <span class="text-white">No</span>
                </label>
              </div>
            </div>
            <div class="flex items-center space-x-3">
              <label class="text-purple-200">Bautizado en Espíritu Santo</label>
              <div class="flex space-x-4">
                <label class="flex items-center">
                  <input type="radio" v-model="form.bautizadoEspiritu" value="S" class="mr-2" />
                  <span class="text-white">Sí</span>
                </label>
                <label class="flex items-center">
                  <input type="radio" v-model="form.bautizadoEspiritu" value="N" class="mr-2" />
                  <span class="text-white">No</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <!-- Sección 6: Información del Sector -->
        <div class="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-xl">
          <h2 class="text-xl font-semibold text-white mb-4 flex items-center">
            <i class="fas fa-users mr-2 text-purple-400"></i>
            Información del Sector
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-purple-200 mb-1">Nombre del Sector</label>
              <input
                v-model="form.nombreSector"
                type="text"
                class="w-full bg-white/5 border border-purple-400/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-400"
              />
            </div>
            <div>
              <label class="block text-purple-200 mb-1">Líder del Sector</label>
              <input
                v-model="form.liderSector"
                type="text"
                class="w-full bg-white/5 border border-purple-400/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-400"
              />
            </div>
          </div>
        </div>

        <!-- Sección 7: Área de Participación -->
        <div class="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-xl">
          <h2 class="text-xl font-semibold text-white mb-4 flex items-center">
            <i class="fas fa-hands-helping mr-2 text-purple-400"></i>
            Área de Participación
          </h2>
          <div>
            <label class="block text-purple-200 mb-1">¿En qué área le gustaría participar?</label>
            <textarea
              v-model="form.areaParticipacion"
              class="w-full bg-white/5 border border-purple-400/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-400"
              rows="3"
            ></textarea>
          </div>
        </div>

        <!-- Botón de envío -->
        <div class="flex justify-center">
          <button
            type="submit"
            class="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all duration-200 flex items-center space-x-2 font-bold"
            :disabled="enviando"
          >
            <i class="fas fa-save"></i>
            <span>{{ enviando ? 'Guardando...' : 'Guardar Registro' }}</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

interface CensoForm {
  nombreCompleto: string
  cedula: string
  direccion: string
  fechaNacimiento: string
  edad: number | null
  estadoCivil: string
  profesion: string
  fechaConversion: string
  donesTalentos: string
  bautizadoAguas: string
  bautizadoEspiritu: string
  perteneceEquipo: string
  nombreSector: string
  liderSector: string
  areaParticipacion: string
}

// Estado del formulario
const form = ref<CensoForm>({
  nombreCompleto: '',
  cedula: '',
  direccion: '',
  fechaNacimiento: '',
  edad: null,
  estadoCivil: 'S',
  profesion: '',
  fechaConversion: '',
  donesTalentos: '',
  bautizadoAguas: 'N',
  bautizadoEspiritu: 'N',
  perteneceEquipo: 'N',
  nombreSector: '',
  liderSector: '',
  areaParticipacion: '',
})

const enviando = ref(false)
const mostrarExito = ref(false)
const mostrarError = ref(false)
const mensajeError = ref('')

// Calcular edad automáticamente
const calcularEdad = () => {
  if (form.value.fechaNacimiento) {
    const fechaNac = new Date(form.value.fechaNacimiento)
    const hoy = new Date()
    let edad = hoy.getFullYear() - fechaNac.getFullYear()
    const mes = hoy.getMonth() - fechaNac.getMonth()

    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
      edad--
    }

    form.value.edad = edad
  }
}

// Observar cambios en la fecha de nacimiento
watch(
  () => form.value.fechaNacimiento,
  () => {
    calcularEdad()
  },
)

// Guardar censo
const guardarCenso = async () => {
  try {
    enviando.value = true

    // Validar campos requeridos
    if (!form.value.nombreCompleto || !form.value.cedula || !form.value.direccion) {
      throw new Error('Por favor complete los campos obligatorios')
    }

    // Crear objeto con fecha de registro
    const censoParaGuardar = {
      ...form.value,
      fechaRegistro: new Date().toISOString(),
      id: crypto.randomUUID(), // Identificador único
    }

    // Obtener registros existentes
    const registrosActuales = JSON.parse(localStorage.getItem('censo-iglesia') || '[]')

    // Agregar nuevo registro
    registrosActuales.push(censoParaGuardar)

    // Guardar en localStorage
    localStorage.setItem('censo-iglesia', JSON.stringify(registrosActuales))

    // Mostrar mensaje de éxito
    mostrarExito.value = true
    setTimeout(() => {
      mostrarExito.value = false
    }, 3000)

    // Limpiar formulario
    form.value = {
      nombreCompleto: '',
      cedula: '',
      direccion: '',
      fechaNacimiento: '',
      edad: null,
      estadoCivil: 'S',
      profesion: '',
      fechaConversion: '',
      donesTalentos: '',
      bautizadoAguas: 'N',
      bautizadoEspiritu: 'N',
      perteneceEquipo: 'N',
      nombreSector: '',
      liderSector: '',
      areaParticipacion: '',
    }
  } catch (error) {
    console.error('Error:', error)
    mostrarError.value = true
    mensajeError.value = error instanceof Error ? error.message : 'Error al guardar el censo'
    setTimeout(() => {
      mostrarError.value = false
    }, 3000)
  } finally {
    enviando.value = false
  }
}

// Notificaciones de éxito y error
</script>

<style scoped>
/* Estilos para inputs type="date" */
input[type='date']::-webkit-calendar-picker-indicator {
  filter: invert(1);
  cursor: pointer;
}

/* Estilos para radio buttons */
input[type='radio'] {
  accent-color: #9333ea;
}

/* Animaciones para notificaciones */
.notification-enter-active,
.notification-leave-active {
  transition: all 0.3s ease;
}

.notification-enter-from,
.notification-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
