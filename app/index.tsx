import { ArrowRight, Leaf, MapPin, Plus, Recycle, Search } from 'lucide-react-native';
import React, { useState } from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('home');

  const HomeScreen = () => (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View style={styles.iconContainer}>
            <Recycle size={32} color="white" />
          </View>
          <View>
            <Text style={styles.headerTitle}>Reciclofácil</Text>
            <Text style={styles.headerSubtitle}>Recicle com consciência</Text>
          </View>
        </View>
      </View>

      {/* Hero Section */}
      <View style={styles.content}>
        <View style={styles.heroCard}>
          <View style={styles.heroHeader}>
            <View style={styles.heroIcon}>
              <Leaf color="white" size={24} />
            </View>
            <View>
              <Text style={styles.heroTitle}>Bem-vindo!</Text>
              <Text style={styles.heroSubtitle}>Encontre pontos de coleta perto de você</Text>
            </View>
          </View>
          
          <View style={styles.heroDescription}>
            <Text style={styles.heroText}>
              Contribua para um planeta mais sustentável. Descarte seus resíduos nos locais adequados e ajude a preservar o meio ambiente.
            </Text>
          </View>
        </View>

        {/* Action Cards */}
        <TouchableOpacity 
          onPress={() => setCurrentScreen('pontos')}
          style={styles.actionCard}
        >
          <View style={styles.actionCardContent}>
            <View style={styles.actionCardLeft}>
              <View style={[styles.actionIcon, { backgroundColor: '#10b981' }]}>
                <MapPin color="white" size={28} />
              </View>
              <View style={styles.actionTextContainer}>
                <Text style={styles.actionTitle}>Ver Pontos de Coleta</Text>
                <Text style={styles.actionSubtitle}>Encontre ecopontos próximos</Text>
              </View>
            </View>
            <ArrowRight color="#10b981" size={24} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => setCurrentScreen('cadastrar')}
          style={styles.actionCard}
        >
          <View style={styles.actionCardContent}>
            <View style={styles.actionCardLeft}>
              <View style={[styles.actionIcon, { backgroundColor: '#14b8a6' }]}>
                <Plus color="white" size={28} />
              </View>
              <View style={styles.actionTextContainer}>
                <Text style={styles.actionTitle}>Cadastrar Novo Ponto</Text>
                <Text style={styles.actionSubtitle}>Adicione um ecoponto à rede</Text>
              </View>
            </View>
            <ArrowRight color="#14b8a6" size={24} />
          </View>
        </TouchableOpacity>

        {/* Stats Section */}
        <View style={styles.statsContainer}>
          <View style={[styles.statCard, { backgroundColor: '#10b981' }]}>
            <Text style={styles.statNumber}>150+</Text>
            <Text style={styles.statLabel}>Pontos Cadastrados</Text>
          </View>
          <View style={[styles.statCard, { backgroundColor: '#14b8a6' }]}>
            <Text style={styles.statNumber}>5.2k</Text>
            <Text style={styles.statLabel}>Usuários Ativos</Text>
          </View>
        </View>

        {/* Footer Info */}
        <View style={styles.tipCard}>
          <View style={styles.tipContent}>
            <Recycle color="#059669" size={20} />
            <Text style={styles.tipText}>
              <Text style={styles.tipBold}>Dica:</Text> Separe seus resíduos em casa e facilite o processo de reciclagem. Pequenas ações fazem grande diferença!
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );

  const PontosScreen = () => (
    <View style={styles.screenContainer}>
      <StatusBar barStyle="light-content" />
      
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => setCurrentScreen('home')}
          style={styles.backButton}
        >
          <ArrowRight color="white" size={20} style={{ transform: [{ rotate: '180deg' }] }} />
          <Text style={styles.backText}>Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.screenTitle}>Pontos de Coleta</Text>
      </View>
      
      <ScrollView style={styles.content}>
        <View style={styles.searchContainer}>
          <Search color="#9ca3af" size={20} />
          <TextInput 
            placeholder="Buscar por localização..." 
            placeholderTextColor="#9ca3af"
            style={styles.searchInput}
          />
        </View>

        {[
          { nome: 'Ecoponto Central', endereco: 'Av. Principal, 1000', tipos: 'Papel, Plástico, Metal', distancia: '1.2 km' },
          { nome: 'Centro de Reciclagem Norte', endereco: 'Rua das Flores, 500', tipos: 'Eletrônicos, Vidro', distancia: '2.8 km' },
          { nome: 'Ponto Verde Sul', endereco: 'Av. Ecológica, 250', tipos: 'Papel, Plástico, Vidro', distancia: '3.5 km' }
        ].map((ponto, idx) => (
          <View key={idx} style={styles.pontoCard}>
            <View style={styles.pontoContent}>
              <View style={styles.pontoIcon}>
                <MapPin color="#059669" size={24} />
              </View>
              <View style={styles.pontoInfo}>
                <Text style={styles.pontoNome}>{ponto.nome}</Text>
                <Text style={styles.pontoEndereco}>{ponto.endereco}</Text>
                <View style={styles.pontoDetails}>
                  <View style={styles.pontoTag}>
                    <Text style={styles.pontoTipos}>{ponto.tipos}</Text>
                  </View>
                  <Text style={styles.pontoDistancia}>{ponto.distancia}</Text>
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );

  const CadastrarScreen = () => {
    const [tiposResiduo, setTiposResiduo] = useState({
      papel: false,
      plastico: false,
      metal: false,
      vidro: false,
      eletronicos: false,
      organicos: false,
    });
  
    const toggleTipo = (tipo: 'papel' | 'plastico' | 'metal' | 'vidro' | 'eletronicos' | 'organicos') => {
      setTiposResiduo(prev => ({ ...prev, [tipo]: !prev[tipo] }));
    };
  
    return (
      <View style={styles.screenContainer}>
        <StatusBar barStyle="light-content" />
        
        <View style={[styles.header, { backgroundColor: '#14b8a6' }]}>
          <TouchableOpacity 
            onPress={() => setCurrentScreen('home')}
            style={styles.backButton}
          >
            <ArrowRight color="white" size={20} style={{ transform: [{ rotate: '180deg' }] }} />
            <Text style={styles.backText}>Voltar</Text>
          </TouchableOpacity>
          <Text style={styles.screenTitle}>Cadastrar Novo Ponto</Text>
        </View>
        
        <ScrollView style={styles.content}>
          <View style={styles.formCard}>
            <View style={styles.formGroup}>
              <Text style={styles.label}>Nome do Local</Text>
              <TextInput 
                placeholder="Ex: Ecoponto Central"
                style={styles.input}
              />
            </View>
  
            <View style={styles.formGroup}>
              <Text style={styles.label}>Endereço</Text>
              <TextInput 
                placeholder="Rua, número, bairro"
                style={styles.input}
              />
            </View>
  
            <View style={styles.formGroup}>
              <Text style={styles.label}>Tipos de Resíduos</Text>
              <View style={styles.checkboxGrid}>
                {[
                  { key: 'papel' as const, label: 'Papel' },
                  { key: 'plastico' as const, label: 'Plástico' },
                  { key: 'metal' as const, label: 'Metal' },
                  { key: 'vidro' as const, label: 'Vidro' },
                  { key: 'eletronicos' as const, label: 'Eletrônicos' },
                  { key: 'organicos' as const, label: 'Orgânicos' }
                ].map(({ key, label }) => (
                  <TouchableOpacity
                    key={key}
                    style={styles.checkboxItem}
                    onPress={() => toggleTipo(key)}
                  >
                    <View style={[styles.checkbox, tiposResiduo[key] && styles.checkboxChecked]}>
                      {tiposResiduo[key] && <Text style={styles.checkmark}>✓</Text>}
                    </View>
                    <Text style={styles.checkboxLabel}>{label}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
  
            <View style={styles.formGroup}>
              <Text style={styles.label}>Observações</Text>
              <TextInput 
                placeholder="Horário de funcionamento, informações adicionais..."
                multiline
                numberOfLines={4}
                style={[styles.input, styles.textArea]}
                textAlignVertical="top"
              />
            </View>
  
            <TouchableOpacity style={styles.submitButton}>
              <Text style={styles.submitText}>Cadastrar Ponto de Coleta</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  };

  return (
    <>
      {currentScreen === 'home' && <HomeScreen />}
      {currentScreen === 'pontos' && <PontosScreen />}
      {currentScreen === 'cadastrar' && <CadastrarScreen />}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0fdf4',
  },
  screenContainer: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  header: {
    backgroundColor: '#059669',
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 24,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 12,
    borderRadius: 16,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#d1fae5',
  },
  content: {
    padding: 24,
  },
  heroCard: {
    backgroundColor: 'white',
    borderRadius: 24,
    padding: 24,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  heroHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 16,
  },
  heroIcon: {
    backgroundColor: '#10b981',
    padding: 12,
    borderRadius: 50,
  },
  heroTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  heroSubtitle: {
    fontSize: 14,
    color: '#6b7280',
  },
  heroDescription: {
    backgroundColor: '#f0fdf4',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#a7f3d0',
  },
  heroText: {
    fontSize: 14,
    color: '#374151',
    lineHeight: 20,
  },
  actionCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 24,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  actionCardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  actionCardLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    flex: 1,
  },
  actionIcon: {
    padding: 16,
    borderRadius: 16,
  },
  actionTextContainer: {
    flex: 1,
  },
  actionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 4,
  },
  actionSubtitle: {
    fontSize: 14,
    color: '#6b7280',
  },
  statsContainer: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 24,
  },
  statCard: {
    flex: 1,
    borderRadius: 16,
    padding: 16,
  },
  statNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#d1fae5',
  },
  tipCard: {
    backgroundColor: '#d1fae5',
    borderRadius: 16,
    padding: 16,
    marginTop: 24,
    borderWidth: 1,
    borderColor: '#a7f3d0',
  },
  tipContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  tipText: {
    flex: 1,
    fontSize: 14,
    color: '#374151',
    lineHeight: 20,
  },
  tipBold: {
    fontWeight: '600',
    color: '#047857',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  backText: {
    color: 'white',
    fontSize: 16,
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  searchContainer: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#374151',
  },
  pontoCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#f3f4f6',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  pontoContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 16,
  },
  pontoIcon: {
    backgroundColor: '#d1fae5',
    padding: 12,
    borderRadius: 12,
  },
  pontoInfo: {
    flex: 1,
  },
  pontoNome: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 4,
  },
  pontoEndereco: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 8,
  },
  pontoDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  pontoTag: {
    backgroundColor: '#d1fae5',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  pontoTipos: {
    fontSize: 12,
    color: '#047857',
    fontWeight: '500',
  },
  pontoDistancia: {
    fontSize: 12,
    color: '#9ca3af',
  },
  formCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: '#374151',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#14b8a6',
    paddingVertical: 16,
    borderRadius: 12,
    marginTop: 8,
  },
  submitText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  checkboxGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginTop: 8,
  },
  checkboxItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '48%',
    marginBottom: 8,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#14b8a6',
    borderRadius: 6,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  checkboxChecked: {
    backgroundColor: '#14b8a6',
    borderColor: '#14b8a6',
  },
  checkmark: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  checkboxLabel: {
    fontSize: 15,
    color: '#374151',
  },
});