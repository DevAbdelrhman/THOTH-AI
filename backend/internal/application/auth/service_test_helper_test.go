package auth

import (
	"github.com/THOTH-AI/THOTH-Chat/backend/internal/infra/config"
	"github.com/THOTH-AI/THOTH-Chat/backend/internal/infra/geoip"
	"github.com/THOTH-AI/THOTH-Chat/backend/internal/infra/identityprovider"
	"github.com/THOTH-AI/THOTH-Chat/backend/internal/repository"
)

func newTestService(cfg config.Config, repo repository.AuthRepository, geoResolver *geoip.Client) *Service {
	return NewServiceWithRuntime(
		config.NewRuntime(cfg),
		repo,
		geoResolver,
		identityprovider.New(cfg.StrictOutboundPolicy()),
	)
}
