pipeline {
    agent any
    tools {nodejs "node"}
    stages {
        stage('Build') {
            steps {
                echo '$PATH'
                sh 'npm install'
                sh 'npm run test'
            }
        }
    }
}