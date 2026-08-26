package main

import (
	"log"

	"github.com/THOTH-AI/THOTH-Chat/backend/docs"
	"github.com/THOTH-AI/THOTH-Chat/backend/internal/cli"
	"github.com/THOTH-AI/THOTH-Chat/backend/internal/shared/buildinfo"
)

// @title THOTH Chat API
// @version 0.3.6
// @description THOTH Chat 后端 API 文档
// @BasePath /api/v1
// @securityDefinitions.apikey BearerAuth
// @in header
// @name Authorization
func main() {
	docs.SwaggerInfo.Version = buildinfo.ResolveVersion()
	if err := cli.Run(); err != nil {
		log.Fatalf("failed to run server: %v", err)
	}
}
