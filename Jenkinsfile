pipeline {
    agent {
        docker{
            image 'node'
            arg '-p 4444:4444'
            arg '-p 4442:4442'
            arg '-p 4443:4443'

        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run test'
            }
        }
    }
}